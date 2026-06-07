create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  tag text not null,
  team text not null,
  body text not null,
  published_at date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  author_id uuid references auth.users(id)
);

alter table public.news enable row level security;

drop policy if exists "Public can read news" on public.news;
create policy "Public can read news"
on public.news
for select
using (true);

drop policy if exists "Authenticated users can insert news" on public.news;
create policy "Authenticated users can insert news"
on public.news
for insert
to authenticated
with check (true);

drop policy if exists "Authors can update their news" on public.news;
create policy "Authors can update their news"
on public.news
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authors can delete their news" on public.news;
create policy "Authors can delete their news"
on public.news
for delete
to authenticated
using (true);
