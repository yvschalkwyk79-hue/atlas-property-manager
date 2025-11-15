import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getProperties() {
  const { data, error } = await supabase.from('properties').select('*');
  if (error) console.error(error);
  return data;
}

export async function getBuyers() {
  const { data, error } = await supabase.from('buyers').select('*');
  if (error) console.error(error);
  return data;
}

export async function getSellers() {
  const { data, error } = await supabase.from('sellers').select('*');
  if (error) console.error(error);
  return data;
}
