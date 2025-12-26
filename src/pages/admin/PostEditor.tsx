import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PostEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: error.message,
          });
          return;
        }

        if (data) {
          setTitle(data.title);
          setContent(data.content);
          setIsPublished(data.is_published);
        }
      });
  }, [id, toast]);

  const handleSave = async () => {
    if (!title || !content) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Title and content are required",
      });
      return;
    }

    setLoading(true);

    let coverUrl: string | undefined;

    if (coverImage) {
      const ext = coverImage.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("posts")
        .upload(path, coverImage);

      if (uploadError) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Upload failed",
          description: uploadError.message,
        });
        return;
      }

      const { data } = supabase.storage.from("posts").getPublicUrl(path);
      coverUrl = data.publicUrl;
    }

    const payload = {
      title,
      content,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      is_published: isPublished,
      cover_image: coverUrl,
    };

    const { error } = id
      ? await supabase.from("posts").update(payload).eq("id", id)
      : await supabase.from("posts").insert(payload);

    setLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Save failed",
        description: error.message,
      });
      return;
    }

    toast({ title: "Post saved" });
    navigate("/admin");
  };

  return (
    <div className="container mx-auto py-12 space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full h-64"
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
      />

      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
        Published
      </label>

      <Button disabled={loading} onClick={handleSave}>
        {loading ? "Saving..." : "Save Post"}
      </Button>
    </div>
  );
};

export default PostEditor;
