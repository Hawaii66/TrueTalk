import { Database } from "@/Interfaces/Database";
import { createClient } from "@supabase/supabase-js";

export const createServerClient = () =>
  createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
