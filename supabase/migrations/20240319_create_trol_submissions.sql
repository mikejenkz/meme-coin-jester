-- Create the trol_submissions table
create table if not exists public.trol_submissions (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    username text not null,
    wallet_address text not null,
    submission_text text not null,
    status text default 'pending'::text
);

-- Enable Row Level Security
alter table public.trol_submissions enable row level security;

-- Create policy to allow inserts for all users
create policy "Enable insert for all users"
    on public.trol_submissions
    for insert
    to public
    with check (true);

-- Create policy to allow users to view their own submissions
create policy "Users can view their own submissions"
    on public.trol_submissions
    for select
    to public
    using (true);

-- Create policy to allow deletion of submissions
create policy "Enable delete for authenticated users"
    on public.trol_submissions
    for delete
    to public
    using (true);