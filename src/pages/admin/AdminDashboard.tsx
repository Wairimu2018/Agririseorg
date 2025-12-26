import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { supabase } from '@/integrations/supabase/client';

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
  const { user, isAdmin, loading: authLoading } = useAdminAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [authLoading, user, isAdmin]);

  useEffect(() => {
    if (isAdmin) fetchPosts();
  }, [isAdmin]);

  const fetchPosts = async () => {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setPosts(data as Post[]);
    setLoadingPosts(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    const { error } = await supabase.from('posts').delete().eq('id', postId);
    if (!error) setPosts(posts.filter(p => p.id !== postId));
  };

  if (authLoading || loadingPosts) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
            <Link to="/admin/posts/new">
              <Button>New Post</Button>
            </Link>
          </div>
        </div>

        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {post.cover_image && (
                    <img src={post.cover_image} alt={post.title} className="w-full h-40 object-cover rounded-lg" />
                  )}
                  <p>Slug: {post.slug}</p>
                  <p>Status: {post.is_published ? 'Published' : 'Draft'}</p>
                  <p>Created: {new Date(post.created_at).toLocaleString()}</p>
                  <div className="flex gap-2 mt-2">
                    <Link to={`/admin/posts/${post.id}`}>
                      <Button size="sm">Edit</Button>
                    </Link>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
