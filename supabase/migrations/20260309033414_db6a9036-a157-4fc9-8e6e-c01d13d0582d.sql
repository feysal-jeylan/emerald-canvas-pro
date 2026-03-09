ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS featured boolean NOT NULL DEFAULT false;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS received_date date;