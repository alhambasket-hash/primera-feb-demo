create table if not exists public.teams (
  short text primary key,
  name text not null,
  city text,
  arena text,
  coach text,
  colors text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists public.games (
  id text primary key,
  season text not null default '2025-2026',
  phase_key text not null,
  phase text not null,
  round integer not null,
  label text,
  game_date date not null,
  game_time text,
  home text not null references public.teams(short),
  away text not null references public.teams(short),
  home_score integer,
  away_score integer,
  venue text,
  status text not null default 'Programado',
  source text not null default 'feb',
  source_url text,
  updated_at timestamptz not null default now()
);

create table if not exists public.standings (
  season text not null default '2025-2026',
  mode text not null,
  team text not null references public.teams(short),
  played integer not null default 0,
  wins integer not null default 0,
  losses integer not null default 0,
  pf integer not null default 0,
  pc integer not null default 0,
  diff integer not null default 0,
  streak text not null default '-',
  position integer not null,
  updated_at timestamptz not null default now(),
  primary key (season, mode, team)
);

alter table public.teams enable row level security;
alter table public.games enable row level security;
alter table public.standings enable row level security;

drop policy if exists "Public can read teams" on public.teams;
create policy "Public can read teams" on public.teams for select using (true);

drop policy if exists "Public can read games" on public.games;
create policy "Public can read games" on public.games for select using (true);

drop policy if exists "Public can read standings" on public.standings;
create policy "Public can read standings" on public.standings for select using (true);

drop policy if exists "Authenticated can manage teams" on public.teams;
create policy "Authenticated can manage teams" on public.teams for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated can manage games" on public.games;
create policy "Authenticated can manage games" on public.games for all to authenticated using (true) with check (true);

drop policy if exists "Authenticated can manage standings" on public.standings;
create policy "Authenticated can manage standings" on public.standings for all to authenticated using (true) with check (true);
