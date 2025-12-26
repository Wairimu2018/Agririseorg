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
  GripVertical,
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';

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
  const [category, setCategory] = useState('update');
  const [isPublished, setIsPublished] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<PostImage[]>([]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const isEditing = id !== 'new';

  /* ---------------- AUTH FIX ---------------- */
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      navigate('/admin/login');
      return;
    }

    if (!isAdmin) {
      toast({
        title: 'Access denied',
        description: 'Admin access required',
        variant: 'destructive',
      });
      navigate('/admin');
      return;
    }

    if (isEditing && id) fetchPost();
  }, [authLoading, user, isAdmin, id]);

  /* ---------------- FETCH ---------------- */
  const fetchPost = async () => {
    setLoading(true);

    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      toast({ title: 'Error loading post', description: error.message });
      navigate('/admin');
      return;
    }

    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt || '');
    setContent(post.content);
    setCategory(post.category);
    setIsPublished(post.is_published);
    setCoverImage(post.cover_image);

    const { data: images } = await supabase
      .from('post_images')
      .select('*')
      .eq('post_id', id)
      .order('display_order');

    if (images) {
      setGalleryImages(
        images.map((img) => ({
          id: img.id,
          image_url: img.image_url,
          caption: img.caption || '',
          display_order: img.display_order,
        }))
      );
    }

    setLoading(false);
  };

  /* ---------------- HELPERS ---------------- */
  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const uploadImage = async (file: File, path: string) => {
    const ext = file.name.split('.').pop();
    const name = `${path}/${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from('post-images')
      .upload(name, file);

    if (error) return null;

    return supabase.storage.from('post-images').getPublicUrl(name).data.publicUrl;
  };

  /* ---------------- SAVE ---------------- */
  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast({
        title: 'Missing fields',
        description: 'Title, slug and content are required',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);

    let cover = coverImage;
    if (coverFile) cover = await uploadImage(coverFile, 'covers');

    const postData = {
      title,
      slug,
      excerpt: excerpt || null,
      content,
      category,
      is_published: isPublished,
      cover_image: cover,
      published_at: isPublished ? new Date().toISOString() : null,
    };

    let postId = id;

    if (isEditing) {
      await supabase.from('posts').update(postData).eq('id', id);
    } else {
      const { data } = await supabase
        .from('posts')
        .insert(postData)
        .select('id')
        .single();
      postId = data.id;
    }

    for (const img of galleryImages) {
      if (img.file) {
        const url = await uploadImage(img.file, `gallery/${postId}`);
        if (url) {
          await supabase.from('post_images').insert({
            post_id: postId,
            image_url: url,
            caption: img.caption || null,
            display_order: img.display_order,
          });
        }
      }
    }

    toast({ title: 'Post saved successfully' });
    navigate('/admin');
  };

  /* ---------------- LOADING ---------------- */
  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="container max-w-4xl py-12">
        <div className="flex justify-between mb-6">
          <Link to="/admin">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>

          <Button onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            Save
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Post Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!isEditing) setSlug(generateSlug(e.target.value));
              }}
            />

            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Write your post here…"
            />
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PostEditor;
