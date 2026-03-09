-- Fix RLS policies for blog_posts: restrict write operations to authenticated users
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can select all blog posts" ON blog_posts;

CREATE POLICY "Authenticated users can select all blog posts" ON blog_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert blog posts" ON blog_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update blog posts" ON blog_posts FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete blog posts" ON blog_posts FOR DELETE TO authenticated USING (true);

-- Fix RLS policies for testimonials
DROP POLICY IF EXISTS "Authenticated users can delete testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can insert testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON testimonials;
DROP POLICY IF EXISTS "Authenticated users can select all testimonials" ON testimonials;

CREATE POLICY "Authenticated users can select all testimonials" ON testimonials FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert testimonials" ON testimonials FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update testimonials" ON testimonials FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete testimonials" ON testimonials FOR DELETE TO authenticated USING (true);