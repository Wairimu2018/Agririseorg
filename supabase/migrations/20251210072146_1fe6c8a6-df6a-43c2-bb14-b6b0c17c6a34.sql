-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Allow admins to view all roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can insert roles
CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete roles
CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Update posts policies to use proper auth
DROP POLICY IF EXISTS "Allow delete posts" ON public.posts;
DROP POLICY IF EXISTS "Allow insert posts" ON public.posts;
DROP POLICY IF EXISTS "Allow update posts" ON public.posts;

CREATE POLICY "Admins can insert posts"
ON public.posts
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update posts"
ON public.posts
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete posts"
ON public.posts
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can view all posts (including unpublished)
CREATE POLICY "Admins can view all posts"
ON public.posts
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Update post_images policies
DROP POLICY IF EXISTS "Allow delete post_images" ON public.post_images;
DROP POLICY IF EXISTS "Allow insert post_images" ON public.post_images;
DROP POLICY IF EXISTS "Allow update post_images" ON public.post_images;

CREATE POLICY "Admins can insert post_images"
ON public.post_images
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update post_images"
ON public.post_images
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete post_images"
ON public.post_images
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));