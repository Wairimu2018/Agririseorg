import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image?: string;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
};
