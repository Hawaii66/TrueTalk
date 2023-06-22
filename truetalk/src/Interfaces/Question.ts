import { Answer, BasicUserAnswer } from "./Answer";
import { nid } from "./Id";

export interface Question {
  id: nid;
  question: string;
  author: string | null;
}

export interface QuestionWithAnswers {
  question: Question;
  answers: BasicUserAnswer[];
}
