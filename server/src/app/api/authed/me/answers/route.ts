import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { GetID } from "@/Functions/GetID";
import { IsError } from "@/Functions/SupabaseError";
import { Answer, PrivateAnswer } from "@/Interfaces/Answer";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { id } = GetID(request);

  const supabase = createServerClient();
  const query = await supabase.from("Answers").select("*").eq("user", id);

  const { data, error } = IsError(query);

  if (error) {
    return error;
  }

  const answers: PrivateAnswer[] = data.map((anser) => ({
    author: anser.user,
    text: anser.answer,
    id: anser.id,
    anonymous: anser.anonymous,
  }));

  return NextResponse.json(answers);
};
