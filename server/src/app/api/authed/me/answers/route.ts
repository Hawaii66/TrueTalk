import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { GetID } from "@/Functions/GetID";
import { IsError } from "@/Functions/SupabaseError";
import { Answer, PrivateAnswer, QuestionAnswer } from "@/Interfaces/Answer";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { id } = GetID(request);

  const supabase = createServerClient();
  const query = await supabase.from("Answers").select("*").eq("user", id);

  const { data, error } = IsError(query);

  if (error) {
    return error;
  }

  const query2 = await supabase
    .from("Questions")
    .select("*")
    .in(
      "id",
      data.map((i) => i.question)
    );
  const { data: quesions, error: error2 } = IsError(query2);

  if (error2) {
    return error2;
  }

  const answers: QuestionAnswer[] = data.map((anser) => ({
    author: anser.user,
    text: anser.answer,
    id: anser.id,
    anonymous: anser.anonymous,
    likes: 0,
    questionId: quesions.find((i) => i.id === anser.question)?.id || 0,
    questionText: quesions.find((i) => i.id === anser.question)?.question || "",
  }));

  return NextResponse.json(answers);
};
