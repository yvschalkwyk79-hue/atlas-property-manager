create table sellers (id uuid primary key default gen_random_uuid(), name text, email text, phone text);
create table buyers (id uuid primary key default gen_random_uuid(), name text, email text, phone text);
create table properties (id uuid primary key default gen_random_uuid(), address text, price numeric, status text, seller_id uuid references sellers(id));
create table deals (id uuid primary key default gen_random_uuid(), property_id uuid references properties(id), buyer_id uuid references buyers(id), status text, finder_fee numeric);
create table conversations (id uuid primary key default gen_random_uuid(), property_id uuid references properties(id), participant_id uuid, participant_type text, message text, created_at timestamp default now());
