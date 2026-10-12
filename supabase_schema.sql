-- ========================================================
-- Supabase SQL Schema for LIFE Semiconductor
-- Table: contact_submissions
-- ========================================================

-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    selected_program TEXT NOT NULL,
    organization TEXT,
    message TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow anyone (anonymous visitors) to submit an inquiry
DROP POLICY IF EXISTS "Allow public anonymous inserts" ON public.contact_submissions;
CREATE POLICY "Allow public anonymous inserts"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Policy: Allow authenticated users / admins to view submissions
DROP POLICY IF EXISTS "Allow authenticated read" ON public.contact_submissions;
CREATE POLICY "Allow authenticated read"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- 5. Helpful index for sorting by latest submission
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
ON public.contact_submissions (created_at DESC);
