import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image?: string | null;
  is_published: boolean;
  created_at?: string;
};
