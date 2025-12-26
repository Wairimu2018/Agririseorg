import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  is_published: boolean;
  cover_image?: string | null;
  published_at?: string | null;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  // Check admin status
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const email = localStorage.getItem('email');

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('posts').select('*').order('published_at', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({ title: 'Error loading posts', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  const handleNewPost = () => {
    navigate('/admin/posts/new'); // make sure your route matches PostEditor
  };

  const handleEditPost = (id: string) => {
    navigate(`/admin/posts/${id}`);
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;
      setPosts(posts.filter(p => p.id !== id));
      toast({ title: 'Post deleted' });
    } catch (error: any) {
      toast({ title: 'Error deleting post', description: error.message, variant: 'destructive' });
    }
  };

  if (loading) return <Loader2 className="w-8 h-8 animate-spin mx-auto mt-20" />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              Logged in as <strong>{email}</strong>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleNewPost} variant="default" size="sm">
                <Plus className="w-4 h-4 mr-2" /> New Post
              </Button>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card key={post.id} className="relative">
              {post.cover_image && (
                <img src={post.cover_image} alt={post.title} className="h-40 w-full object-cover rounded-t-lg" />
              )}
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt || post.slug}</p>
                <div className="flex justify-between items-center mt-2">
                  <Button size="sm" variant="outline" onClick={() => handleEditPost(post.id)}>
                    Edit <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
