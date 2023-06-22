import { useContext, useEffect, useState } from "react";
import { API_ROUTE } from "../Functions/API";
import { Question, QuestionWithAnswers } from "../Interfaces/Question";
import { UserContext } from "../Context/UserContext";
import { Answer, BasicUserAnswer } from "../Interfaces/Answer";
import { Alert } from "react-native";
import { useFetch } from "./useFetch";

export const useQuestion = () => {
  const [mainQuestion, setMainQuestion] = useState<QuestionWithAnswers>({
    question: { author: "", id: -1, question: "" },
    answers: [],
  });

  const { makeGet } = useFetch();

  const getMainQuestion = async () => {
    const result = await makeGet<QuestionWithAnswers>(
      "/question/current?answers=10"
    );

    if (result === null) {
      Alert.alert("No question found");
      return;
    }

    setMainQuestion({
      question: result.question,
      answers: result.answers.map((i) => ({ ...i, likes: 0 })),
    });
  };

  useEffect(() => {
    getMainQuestion();
  }, []);

  return { mainQuestion };
};
