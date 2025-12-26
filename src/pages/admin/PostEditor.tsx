import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save, Upload, X, GripVertical, Loader2, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import RichTextEditor from '@/components/RichTextEditor';

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
    if (isEditing && id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    setLoading(true);
    const { data: post, error } = await supabase.from('posts').select('*').eq('id', id).single();
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

      const { data: images } = await supabase
        .from('post_images')
        .select('*')
        .eq('post_id', id)
        .order('display_order', { ascending: true });

      if (images) {
        setGalleryImages(
          images.map(img => ({
            id: img.id,
            image_url: img.image_url,
            caption: img.caption || '',
            display_order: img.display_order
          }))
        );
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
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && index !== draggedIndex) setDragOverIndex(index);
  }, [draggedIndex]);

  const handleDragLeave = useCallback(() => setDragOverIndex(null), []);

  const handleDrop = useCallback(
    (e: React.DragEvent, dropIndex: number) => {
      e.preventDefault();
      if (draggedIndex === null || draggedIndex === dropIndex) {
        setDraggedIndex(null);
        setDragOverIndex(null);
        return;
      }

      const newImages = [...galleryImages];
      const [draggedItem] = newImages.splice(draggedIndex, 1);
      newImages.splice(dropIndex, 0, draggedItem);

      setGalleryImages(newImages.map((img, idx) => ({ ...img, display_order: idx })));
      setDraggedIndex(null);
      setDragOverIndex(null);
    },
    [draggedIndex, galleryImages]
  );

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  const handleDropZone = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files?.length) {
        const imageFiles = Array.from(files).filter(f => f.type.startsWith('image/'));
        if (imageFiles.length) {
          const newImages = imageFiles.map((file, index) => ({
            image_url: URL.createObjectURL(file),
            caption: '',
            display_order: galleryImages.length + index,
            file
          }));
          setGalleryImages([...galleryImages, ...newImages]);
        }
      }
    },
    [galleryImages]
  );

  const uploadImage = async (file: File, path: string): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${path}/${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage.from('post-images').upload(fileName, file);
    if (error) return null;

    const { data } = supabase.storage.from('post-images').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast({ title: 'Missing fields', description: 'Fill title, slug, and content', variant: 'destructive' });
      return;
    }

    setSaving(true);

    try {
      const postId = isEditing ? id! : uuidv4();

      // Cover image
      let finalCoverImage = coverImage;
      if (coverFile) {
        const uploadedUrl = await uploadImage(coverFile, `covers/${postId}`);
        if (uploadedUrl) finalCoverImage = uploadedUrl;
      }

      const postData = {
        id: postId,
        title,
        slug,
        excerpt: excerpt || null,
        content,
        category,
        is_published: isPublished,
        cover_image: finalCoverImage,
        published_at: isPublished ? new Date().toISOString() : null
      };

      if (isEditing) {
        const { error } = await supabase.from('posts').update(postData).eq('id', postId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('posts').insert(postData);
        if (error) throw error;
      }

      // Gallery
      for (const img of galleryImages) {
        if (img.file) {
          const uploadedUrl = await uploadImage(img.file, `gallery/${postId}`);
          if (uploadedUrl) {
            await supabase.from('post_images').insert({
              post_id: postId,
              image_url: uploadedUrl,
              caption: img.caption || null,
              display_order: img.display_order
            });
          }
        } else if (img.id) {
          await supabase.from('post_images').update({
            caption: img.caption || null,
            display_order: img.display_order
          }).eq('id', img.id);
        }
      }

      toast({
        title: isEditing ? 'Post updated' : 'Post created',
        description: isPublished ? 'Your post is live!' : 'Saved as draft.'
      });

      navigate('/admin');
    } catch (error: any) {
      toast({ title: 'Error saving post', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loader2 className="w-8 h-8 animate-spin mx-auto mt-20" />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">{isEditing ? 'Edit Post' : 'New Post'}</h1>
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>

          <div className="grid gap-8">
            {/* Post Details */}
            <Card>
              <CardHeader><CardTitle>Post Details</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Title *</Label>
                  <Input value={title} onChange={e => handleTitleChange(e.target.value)} placeholder="Enter title" />
                </div>
                <div className="space-y-2">
                  <Label>Slug *</Label>
                  <Input value={slug} onChange={e => setSlug(e.target.value)} placeholder="post-url-slug" />
                </div>
                <div className="space-y-2">
                  <Label>Excerpt</Label>
                  <Textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} placeholder="Short description" />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Publish</Label>
                  <Switch checked={isPublished} onCheckedChange={setIsPublished} />
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            <Card>
              <CardHeader><CardTitle>Cover Image</CardTitle></CardHeader>
              <CardContent>
                <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
                {coverImage ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" onClick={() => coverInputRef.current?.click()}><Upload className="w-4 h-4 mr-2" /> Replace</Button>
                      <Button size="sm" variant="destructive" onClick={() => { setCoverImage(null); setCoverFile(null); }}><X className="w-4 h-4 mr-2" /> Remove</Button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => coverInputRef.current?.click()} className="w-full aspect-video border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center gap-2">
                    <ImageIcon className="w-10 h-10 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Click to upload cover image</span>
                  </button>
                )}
              </CardContent>
            </Card>

            {/* Content */}
            <Card>
              <CardHeader><CardTitle>Content *</CardTitle></CardHeader>
              <CardContent>
                <RichTextEditor content={content} onChange={setContent} placeholder="Write your post content..." />
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader><CardTitle>Gallery Images</CardTitle></CardHeader>
              <CardContent>
                <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
                {galleryImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {galleryImages.map((img, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={e => handleDragStart(e, index)}
                        onDragOver={e => handleDragOver(e, index)}
                        onDragLeave={handleDragLeave}
                        onDrop={e => handleDrop(e, index)}
                        onDragEnd={handleDragEnd}
                        className={`relative group aspect-square rounded-lg overflow-hidden cursor-move transition-all ${draggedIndex === index ? 'opacity-50 scale-95' : ''} ${dragOverIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                      >
                        <img src={img.image_url} alt={img.caption || `Gallery ${index+1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50">
                          <Button variant="destructive" size="icon" onClick={() => removeGalleryImage(index)}><X className="w-4 h-4" /></Button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
                          <Input
                            value={img.caption}
                            onChange={e => { const newImages = [...galleryImages]; newImages[index].caption = e.target.value; setGalleryImages(newImages); }}
                            placeholder="Caption"
                            className="h-8 text-xs bg-transparent border-white/30 text-white placeholder:text-white/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div
                  onDragOver={e => e.preventDefault()}
                  onDrop={handleDropZone}
                >
                  <button onClick={() => fileInputRef.current?.click()} className="w-full py-8 border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center gap-2">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Click to upload or drag & drop images</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostEditor;
