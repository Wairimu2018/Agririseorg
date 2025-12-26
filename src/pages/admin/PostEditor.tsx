import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase, Post } from "@/lib/supabaseClient";
import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";

const PostEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Partial<Post>>({
    title: "",
    slug: "",
    content: "",
    is_published: false,
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Load post if editing
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          toast({ title: "Error", description: error.message });
        } else {
          setPost(data);
        }
        setLoading(false);
      });
  }, [id]);

  // Handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };

  // Handle content change
  const handleContentChange = (content: string) => {
    setPost((prev) => ({ ...prev, content }));
  };

  // Handle cover image
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const uploadCoverImage = async (): Promise<string | undefined> => {
    if (!coverFile) return post.cover_image; // use existing if editing

    const fileName = `${uuidv4()}-${coverFile.name}`;
    const { error: uploadError } = await supabase.storage
      .from("post-covers")
      .upload(fileName, coverFile, { upsert: true });

    if (uploadError) {
      toast({ title: "Upload Error", description: uploadError.message });
      return;
    }

    const { data } = supabase.storage.from("post-covers").getPublicUrl(fileName);
    return data?.publicUrl;
  };

  const handleSave = async () => {
    if (!post.title || !post.content) {
      toast({ title: "Error", description: "Title and content are required." });
      return;
    }

    setLoading(true);

    try {
      const cover_image_url = await uploadCoverImage();

      const postData: Partial<Post> = {
        title: post.title,
        slug: post.slug || post.title.toLowerCase().replace(/\s+/g, "-"),
        content: post.content,
        cover_image: cover_image_url,
        is_published: post.is_published ?? false,
      };

      if (id) {
        // Update existing post
        const { error } = await supabase.from("posts").update(postData).eq("id", id);
        if (error) throw error;
        toast({ title: "Success", description: "Post updated successfully." });
      } else {
        // Create new post
        const { error } = await supabase.from("posts").insert(postData);
        if (error) throw error;
        toast({ title: "Success", description: "Post created successfully." });
        setPost({ title: "", content: "", is_published: false });
        setCoverFile(null);
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this post?")) return;

    setLoading(true);
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      toast({ title: "Error", description: error.message });
    } else {
      toast({ title: "Deleted", description: "Post deleted successfully." });
      navigate("/admin");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Post" : "New Post"}</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Title</label>
        <input
          type="text"
          value={post.title || ""}
          onChange={handleTitleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Content</label>
        <RichTextEditor content={post.content || ""} onChange={handleContentChange} />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Cover Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {post.cover_image && !coverFile && (
          <img src={post.cover_image} alt="Cover" className="mt-2 max-h-40" />
        )}
        {coverFile && (
          <img src={URL.createObjectURL(coverFile)} alt="Preview" className="mt-2 max-h-40" />
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>

        {id && (
          <Button onClick={handleDelete} variant="destructive" disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostEditor;
