import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { GetBasicAnswer } from "@/Functions/GetAnswer";
import { IsError } from "@/Functions/SupabaseError";
import { GetTimestamp } from "@/Functions/Timestamp";
import { BasicUserAnswer, UserAnswer } from "@/Interfaces/Answer";
import { Question, QuestionWithAnswers } from "@/Interfaces/Question";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const answerParam = searchParams.get("answers");
  var numAnswers = 0;
  if (answerParam === null) {
    numAnswers = 0;
  } else {
    numAnswers = parseInt(answerParam);

    if (isNaN(numAnswers)) {
      numAnswers = 0;
    }
  }

  const timestamp = GetTimestamp();

  const supabase = createServerClient();
  const query = await supabase
    .from("Questions")
    .select("*")
    .eq("day", timestamp)
    .eq("main", true)
    .single();

  const { data: questionData, error } = IsError(query);
  if (error) {
    return error;
  }

  const query2 = await supabase
    .from("Answers")
    .select("*")
    .eq("question", questionData.id)
    .limit(numAnswers);
  const { data: answersData, error: error2 } = IsError(query2);
  if (error2) {
    return error2;
  }

  const question: Question = {
    id: questionData.id,
    question: questionData.question,
    author: null,
  };

  const promises: Promise<BasicUserAnswer | null>[] = [];
  answersData.forEach((answer) => promises.push(GetBasicAnswer(answer.id)));

  const answers = await Promise.all(promises);

  const returnData: QuestionWithAnswers = {
    answers: answers.filter((i) => i !== null) as BasicUserAnswer[],
    question,
  };

  return NextResponse.json(returnData);
};
