import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pclhkjkdacgeawvwdgem.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbGhramtkYWNnZWF3dndkZ2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4Nzg2MDIsImV4cCI6MjAzOTQ1NDYwMn0.RYpTnugsb2HN4myMmdfXRNfAOzGp1TV7y3eAvQa18Ck";
export const supabase = createClient(supabaseUrl, supabaseKey);

//get Request to receive all foods + their macros
