import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  FileText, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  LogOut,
  Loader2
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AccessRequestsManager from '@/components/admin/AccessRequestsManager';

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, signOut } = useAdminAuth();

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate('/admin/login');
      } else if (!isAdmin) {
        toast({
          title: 'Access denied',
          description: 'You do not have admin privileges.',
          variant: 'destructive'
        });
        supabase.auth.signOut();
        navigate('/admin/login');
      } else {
        fetchPosts();
      }
    }
  }, [authLoading, user, isAdmin, navigate]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, category, is_published, published_at, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Error fetching posts',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!deletePostId) return;

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', deletePostId);

    if (error) {
      toast({
        title: 'Error deleting post',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Post deleted',
        description: 'The post has been permanently deleted.'
      });
      fetchPosts();
    }
    setDeletePostId(null);
  };

  const togglePublish = async (post: Post) => {
    const newStatus = !post.is_published;
    const { error } = await supabase
      .from('posts')
      .update({ 
        is_published: newStatus,
        published_at: newStatus ? new Date().toISOString() : null
      })
      .eq('id', post.id);

    if (error) {
      toast({
        title: 'Error updating post',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: newStatus ? 'Post published' : 'Post unpublished',
        description: newStatus ? 'The post is now visible to visitors.' : 'The post is now hidden.'
      });
      fetchPosts();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Logged in as {user?.email}
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/admin/posts/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Access Requests */}
          <AccessRequestsManager />

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Posts</p>
                    <p className="text-3xl font-bold text-foreground">{posts.length}</p>
                  </div>
                  <FileText className="w-10 h-10 text-primary/20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="text-3xl font-bold text-foreground">
                      {posts.filter(p => p.is_published).length}
                    </p>
                  </div>
                  <Eye className="w-10 h-10 text-primary/20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Drafts</p>
                    <p className="text-3xl font-bold text-foreground">
                      {posts.filter(p => !p.is_published).length}
                    </p>
                  </div>
                  <EyeOff className="w-10 h-10 text-muted-foreground/20" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts List */}
          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8 text-muted-foreground">Loading...</div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No posts yet</p>
                  <Link to="/admin/posts/new">
                    <Button>Create Your First Post</Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {posts.map((post) => (
                    <div key={post.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground">{post.title}</h3>
                          <Badge variant={post.is_published ? 'default' : 'secondary'}>
                            {post.is_published ? 'Published' : 'Draft'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {post.category} • Created {formatDate(post.created_at)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePublish(post)}
                        >
                          {post.is_published ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Link to={`/admin/posts/${post.id}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeletePostId(post.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletePostId} onOpenChange={() => setDeletePostId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The post and all its images will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
