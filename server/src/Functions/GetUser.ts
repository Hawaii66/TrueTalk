import { User } from "@/Interfaces/User";
import { createServerClient } from "./CreateSupabaseServer";

export const GetUser = async (id: string): Promise<User | null> => {
  const supabase = createServerClient();
  const data = await supabase.from("Users").select("*").eq("id", id).single();

  if (data.error) {
    return null;
  }

  return {
    age: data.data.age,
    email: data.data.email || "",
    name: data.data.name,
    username: data.data.username,
    id: id,
  };
};
