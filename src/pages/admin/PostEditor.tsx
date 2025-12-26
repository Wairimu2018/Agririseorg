import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RichTextEditor from '@/components/RichTextEditor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  X, 
  Image as ImageIcon,
  Loader2,
  GripVertical
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/use-admin-auth'; // <- fixed import

interface PostImage {
  id?: string;
  image_url: string;
  caption: string;
  display_order: number;
  file?: File;
}

const PostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  
  const { user, isAdmin, loading: authLoading } = useAdminAuth(); // use hook
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('update');
  const [isPublished, setIsPublished] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<PostImage[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const isEditing = id !== 'new';

  useEffect(() => {
    if (!authLoading) {
      if (!user || !isAdmin) {
        navigate('/admin/login');
      } else if (isEditing && id) {
        fetchPost();
      }
    }
  }, [authLoading, user, isAdmin, isEditing, id, navigate]);

  // --- Fetch existing post ---
  const fetchPost = async () => {
    setLoading(true);
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      toast({ title: 'Error loading post', description: error.message, variant: 'destructive' });
      navigate('/admin');
      return;
    }

    if (post) {
      setTitle(post.title);
      setSlug(post.slug);
      setExcerpt(post.excerpt || '');
      setContent(post.content);
      setCategory(post.category);
      setIsPublished(post.is_published);
      setCoverImage(post.cover_image);

      // Fetch gallery images
      const { data: images } = await supabase
        .from('post_images')
        .select('*')
        .eq('post_id', id)
        .order('display_order', { ascending: true });

      if (images) {
        setGalleryImages(images.map(img => ({
          id: img.id,
          image_url: img.image_url,
          caption: img.caption || '',
          display_order: img.display_order
        })));
      }
    }
    setLoading(false);
  };

  // --- Helper functions ---
  const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing) setSlug(generateSlug(value));
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFile(file);
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: PostImage[] = Array.from(files).map((file, index) => ({
        image_url: URL.createObjectURL(file),
        caption: '',
        display_order: galleryImages.length + index,
        file
      }));
      setGalleryImages([...galleryImages, ...newImages]);
    }
  };

  const removeGalleryImage = (index: number) => setGalleryImages(galleryImages.filter((_, i) => i !== index));

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedIndex !== null && index !== draggedIndex) setDragOverIndex(index);
  }, [draggedIndex]);

  const handleDragLeave = useCallback(() => setDragOverIndex(null), []);
  const handleDragEnd = useCallback(() => { setDraggedIndex(null); setDragOverIndex(null); }, []);

  const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return setDraggedIndex(null), setDragOverIndex(null);

    const newImages = [...galleryImages];
    const [draggedItem] = newImages.splice(draggedIndex, 1);
    newImages.splice(dropIndex, 0, draggedItem);
    
    setGalleryImages(newImages.map((img, idx) => ({ ...img, display_order: idx })));
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, galleryImages]);

  const handleDropZone = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length) {
      const newImages = files.map((file, idx) => ({
        image_url: URL.createObjectURL(file),
        caption: '',
        display_order: galleryImages.length + idx,
        file
      }));
      setGalleryImages([...galleryImages, ...newImages]);
    }
  }, [galleryImages]);

  const uploadImage = async (file: File, path: string): Promise<string | null> => {
    const ext = file.name.split('.').pop();
    const fileName = `${path}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('post-images').upload(fileName, file);
    if (error) { console.error(error); return null; }
    const { data: { publicUrl } } = supabase.storage.from('post-images').getPublicUrl(fileName);
    return publicUrl;
  };

  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast({ title: 'Missing fields', description: 'Fill title, slug, and content.', variant: 'destructive' });
      return;
    }
    setSaving(true);

    try {
      let finalCover = coverImage;
      if (coverFile) {
        const uploaded = await uploadImage(coverFile, 'covers');
        if (uploaded) finalCover = uploaded;
      }

      const postData = { title, slug, excerpt: excerpt || null, content, category, is_published: isPublished, cover_image: finalCover, published_at: isPublished ? new Date().toISOString() : null };
      let postId = id;

      if (isEditing) {
        const { error } = await supabase.from('posts').update(postData).eq('id', id);
        if (error) throw error;
      } else {
        const { data, error } = await supabase.from('posts').insert(postData).select('id').single();
        if (error) throw error;
        postId = data.id;
      }

      // Save gallery images
      for (const img of galleryImages) {
        if (img.file) {
          const uploadedUrl = await uploadImage(img.file, `gallery/${postId}`);
          if (uploadedUrl) {
            await supabase.from('post_images').insert({ post_id: postId, image_url: uploadedUrl, caption: img.caption || null, display_order: img.display_order });
          }
        } else if (img.id) {
          await supabase.from('post_images').update({ caption: img.caption || null, display_order: img.display_order }).eq('id', img.id);
        }
      }

      toast({ title: isEditing ? 'Post updated' : 'Post created', description: isPublished ? 'Live!' : 'Draft saved.' });
      navigate('/admin');
    } catch (err: any) {
      toast({ title: 'Error saving', description: err.message, variant: 'destructive' });
    } finally { setSaving(false); }
  };

  if (authLoading || (!user && !authLoading)) return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 py-12 container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/admin"><Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2"/>Back</Button></Link>
          <h1 className="text-2xl font-bold">{isEditing ? 'Edit Post' : 'New Post'}</h1>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin"/> : <Save className="w-4 h-4 mr-2"/>}
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>

        {/* Post form */}
        {/* The rest of your cards: Post Details, Cover Image, Content, Gallery */}
        {/* Keep drag & drop for gallery exactly as before */}
      </div>
      <Footer />
    </div>
  );
};

export default PostEditor;
