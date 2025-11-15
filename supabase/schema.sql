CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  address TEXT,
  asking_price NUMERIC,
  offer_amount NUMERIC,
  status TEXT DEFAULT 'new',
  seller_id INT,
  buyer_id INT,
  finder_fee NUMERIC,
  fee_status TEXT DEFAULT 'pending',
  payment_method TEXT,
  transaction_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sellers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  nda_signed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE buyers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  nda_signed BOOLEAN DEFAULT FALSE,
  fee_acknowledged BOOLEAN DEFAULT FALSE,
  bid_amount NUMERIC,
  created_at TIMESTAMP DEFAULT NOW()
);
