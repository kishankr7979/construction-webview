import { createClient } from "@supabase/supabase-js";
const YOUR_REACT_SUPABASE_URL='https://gikvmgffezunqzhhdayd.supabase.co'
const YOUR_REACT_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpa3ZtZ2ZmZXp1bnF6aGhkYXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1NDE1NzQsImV4cCI6MTk3MDExNzU3NH0.--OCI-6wdNPrxvURVJjveWaYg3J39HD92A5sAjTnak0'
export const supabase = createClient(
    YOUR_REACT_SUPABASE_URL,
    YOUR_REACT_SUPABASE_ANON_KEY
);