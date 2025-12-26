import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Trash2, Edit, Plus } from 'lucide-react';
import { useAdminAuth } from '@/hooks/use-admin-auth';
import { useToast } from '@/hooks/use-toast';

interface Post {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  cover_image: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAdmin, loading: authLoading } = useAdminAuth();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch posts from Supabase
  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Error fetching posts',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      setPosts(data as Post[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!authLoading) {
      if (!user || !isAdmin) {
        navigate('/admin/login');
      } else {
        fetchPosts();
      }
    }
  }, [authLoading, user, isAdmin, navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    setDeletingId(id);

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Delete failed',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Post deleted',
        description: 'The post has been removed successfully.'
      });
      setPosts(posts.filter(p => p.id !== id));
    }

    setDeletingId(null);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Admin Dashboard</CardTitle>
            <div className="flex items-center gap-2">
              <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
              <Button
                onClick={() => navigate('/admin/posts/new')}
                variant="secondary"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" /> New Post
              </Button>
            </div>
          </CardHeader>

          <CardContent className="mt-4">
            {posts.length === 0 ? (
              <p className="text-muted-foreground">No posts yet.</p>
            ) : (
              <div className="grid gap-4">
                {posts.map(post => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between gap-4 border rounded-lg p-4 hover:shadow"
                  >
                    <div className="flex items-center gap-4">
                      {post.cover_image ? (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                          No Image
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{post.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.is_published ? 'Published' : 'Draft'} • {new Date(post.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/posts/${post.id}`)}
                      >
                        <Edit className="w-4 h-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        disabled={deletingId === post.id}
                        onClick={() => handleDelete(post.id)}
                      >
                        {deletingId === post.id ? (
                          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 mr-1" />
                        )}
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
