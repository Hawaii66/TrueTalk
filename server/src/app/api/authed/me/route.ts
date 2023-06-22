import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { GetID } from "@/Functions/GetID";
import { IsError, ReturnIfError } from "@/Functions/SupabaseError";
import { User } from "@/Interfaces/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { id } = GetID(request);

  const supabase = createServerClient();
  const query = await supabase.from("Users").select("*").eq("id", id).single();

  const { data, error } = IsError(query);

  if (error) {
    return error;
  }

  const user: User = {
    age: data.age,
    email: data.email || "",
    id: data.id,
    name: data.name,
    username: data.username,
  };

  return NextResponse.json(user);
};
