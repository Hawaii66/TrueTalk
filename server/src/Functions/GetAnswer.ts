import { BasicUserAnswer } from "@/Interfaces/Answer";
import { createServerClient } from "./CreateSupabaseServer";
import { IsError } from "./SupabaseError";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/Interfaces/Database";

export const GetBasicAnswer = async (
  id: number
): Promise<BasicUserAnswer | null> => {
  const supabase = createServerClient();

  const query = await supabase
    .from("Answers")
    .select("*")
    .eq("id", id)
    .single();
  const { data: answerData, error: answerError } = IsError(query);
  if (answerError) {
    return null;
  }

  const query2 = await supabase
    .from("Users")
    .select("*")
    .eq("id", answerData.user)
    .single();
  const { data: userData, error: userError } = IsError(query2);
  if (userError) {
    return null;
  }

  return {
    author: answerData.anonymous
      ? {
          id: "",
          username: "Anonymous",
        }
      : {
          id: userData.id,
          username: userData.username,
        },
    id: id,
    text: answerData.answer,
  };
};
