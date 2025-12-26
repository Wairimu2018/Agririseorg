import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RichTextEditor from '@/components/RichTextEditor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
import { useAdminAuth } from '@/hooks/use-admin-auth';

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

  const { user, isAdmin, loading: authLoading } = useAdminAuth();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
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
      setIsPublished(post.is_published);
      setCoverImage(post.cover_image);

      // fetch gallery
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

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

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

  const removeGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && index !== draggedIndex) setDragOverIndex(index);
  }, [draggedIndex]);

  const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newImages = [...galleryImages];
    const [draggedItem] = newImages.splice(draggedIndex, 1);
    newImages.splice(dropIndex, 0, draggedItem);
    setGalleryImages(newImages.map((img, i) => ({ ...img, display_order: i })));
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, galleryImages]);

  const handleDropZone = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files?.length) {
      const imageFiles = Array.from(files).filter(f => f.type.startsWith('image/'));
      if (imageFiles.length) {
        const newImages: PostImage[] = imageFiles.map((file, index) => ({
          image_url: URL.createObjectURL(file),
          caption: '',
          display_order: galleryImages.length + index,
          file
        }));
        setGalleryImages([...galleryImages, ...newImages]);
      }
    }
  }, [galleryImages]);

  const uploadImage = async (file: File, path: string) => {
    const ext = file.name.split('.').pop();
    const fileName = `${path}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('post-images').upload(fileName, file);
    if (error) return null;
    const { data } = supabase.storage.from('post-images').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast({ title: 'Required fields missing', variant: 'destructive' });
      return;
    }

    setSaving(true);
    try {
      let finalCover = coverImage;
      if (coverFile) {
        const url = await uploadImage(coverFile, 'covers');
        if (url) finalCover = url;
      }

      const postData = { title, slug, excerpt, content, is_published: isPublished, cover_image: finalCover };

      let postId = id;
      if (isEditing) {
        await supabase.from('posts').update(postData).eq('id', id);
      } else {
        const { data, error } = await supabase.from('posts').insert(postData).select('id').single();
        if (error) throw error;
        postId = data.id;
      }

      for (const img of galleryImages) {
        if (img.file) {
          const url = await uploadImage(img.file, `gallery/${postId}`);
          if (url) await supabase.from('post_images').insert({ post_id: postId, image_url: url, caption: img.caption, display_order: img.display_order });
        } else if (img.id) {
          await supabase.from('post_images').update({ caption: img.caption, display_order: img.display_order }).eq('id', img.id);
        }
      }

      toast({ title: isEditing ? 'Post updated' : 'Post created' });
      navigate('/admin');
    } catch (err: any) {
      toast({ title: 'Error saving post', description: err.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) return <Loader2 className="w-8 h-8 animate-spin mx-auto my-20" />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/admin"><Button variant="ghost"><ArrowLeft className="w-4 h-4 mr-2" />Back</Button></Link>
          <Button onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Post Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div><Label>Title *</Label><Input value={title} onChange={e => handleTitleChange(e.target.value)} /></div>
              <div><Label>Slug *</Label><Input value={slug} onChange={e => setSlug(e.target.value)} /></div>
              <div><Label>Excerpt</Label><Textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} /></div>
              <div className="flex items-center justify-between">
                <Label>Publish</Label>
                <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} />
              </div>
            </CardContent>
          </Card>

          {/* Cover */}
          <Card>
            <CardHeader><CardTitle>Cover Image</CardTitle></CardHeader>
            <CardContent>
              <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
              {coverImage ? (
                <div className="relative aspect-video">
                  <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex justify-center items-center gap-2 bg-black/50">
                    <Button onClick={() => coverInputRef.current?.click()}><Upload /> Replace</Button>
                    <Button onClick={() => { setCoverImage(null); setCoverFile(null); }} variant="destructive"><X /> Remove</Button>
                  </div>
                </div>
              ) : (
                <button onClick={() => coverInputRef.current?.click()} className="w-full aspect-video border-dashed border-2 p-4 flex flex-col items-center justify-center">
                  <ImageIcon className="w-10 h-10" /> Click to upload cover
                </button>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader><CardTitle>Content *</CardTitle></CardHeader>
            <CardContent>
              <RichTextEditor content={content} onChange={setContent} />
            </CardContent>
          </Card>

          {/* Gallery */}
          <Card>
            <CardHeader><CardTitle>Gallery Images</CardTitle></CardHeader>
            <CardContent>
              <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} draggable onDragStart={e => handleDragStart(e, i)} onDragOver={e => handleDragOver(e, i)} onDrop={e => handleDrop(e, i)} className={`relative aspect-square ${draggedIndex === i ? 'opacity-50' : ''}`}>
                      <img src={img.image_url} alt={img.caption || ''} className="w-full h-full object-cover" />
                      <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={() => removeGalleryImage(i)}><X className="w-4 h-4" /></Button>
                      <Input value={img.caption} onChange={e => { const newImgs = [...galleryImages]; newImgs[i].caption = e.target.value; setGalleryImages(newImgs); }} placeholder="Caption" className="absolute bottom-0 w-full bg-black/50 text-white text-xs" />
                    </div>
                  ))}
                </div>
              )}
              <div onDragOver={e => e.preventDefault()} onDrop={handleDropZone}>
                <button onClick={() => fileInputRef.current?.click()} className="w-full border-dashed border-2 p-8 flex flex-col items-center justify-center">
                  <Upload className="w-8 h-8" /> Click or drag & drop
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostEditor;
