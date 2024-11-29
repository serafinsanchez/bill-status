-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;  -- For fuzzy text search
CREATE EXTENSION IF NOT EXISTS btree_gin;  -- For faster indexing

-- Create enum for bill status
CREATE TYPE bill_status AS ENUM (
    'Introduced',
    'In Committee',
    'Passed House',
    'Passed Senate',
    'Sent to Governor',
    'Signed by Governor',
    'Became Law',
    'Vetoed',
    'Dead'
);

-- Create enum for chamber
CREATE TYPE chamber AS ENUM (
    'House',
    'Senate'
);

-- Main bills table
CREATE TABLE bills (
    id SERIAL PRIMARY KEY,
    bill_number VARCHAR(20) UNIQUE NOT NULL,
    chamber chamber NOT NULL,
    title TEXT NOT NULL,
    status bill_status NOT NULL,
    summary TEXT,
    full_text_url TEXT,
    url TEXT NOT NULL,
    introduced_date DATE,
    last_action_date DATE,
    last_action_text TEXT,
    sponsors JSONB,
    committees JSONB,
    fiscal_notes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    version INTEGER DEFAULT 1,
    CONSTRAINT valid_bill_number CHECK (bill_number ~ '^(HB|SB|HJR|SJR)[0-9]{2}-[0-9]{4}$')
);

-- Add other tables and indexes as previously defined...