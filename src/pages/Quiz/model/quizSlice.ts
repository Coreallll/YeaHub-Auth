import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import type { QuizParams } from "./QuizTypes.ts";
import { loadQuizState } from "./quizState.ts";
import type { Question } from "@/entities/question/model/questionTypes.ts";

type QuizAnswerStatus = "KNOWN" | "UNKNOWN";

interface QuizAnswer {
  questionId: number;
  questionTitle: string;
  answer: QuizAnswerStatus;
}

export interface QuizState {
  params: QuizParams | null;
  questions: Question[];
  currentQuestionId: number | null;
  answers: QuizAnswer[];
}

const defaultQuizState = {
  params: null,
  questions: [],
  currentQuestionId: null,
  answers: [],
};

const initialState: QuizState = loadQuizState() ?? defaultQuizState;

const quizStateSlice = createSlice({
  name: "quizState",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setQuizParams(state, action: PayloadAction<QuizFormValues>) {
      state.params = action.payload;

      state.questions = [];
      state.currentQuestionId = null;
      state.answers = [];
    },
    setCurrentQuestionId(state, action: PayloadAction<number>) {
      state.currentQuestionId = action.payload;
    },
    setQuizAnswer(state, action: PayloadAction<QuizAnswer>) {
      const existingQuizAnswer = state.answers.find(
        (question) => question.questionId === action.payload.questionId,
      );
      if (existingQuizAnswer) {
        existingQuizAnswer.answer = action.payload.answer;
      } else {
        state.answers.push(action.payload);
      }
    },
  },
});

export const { setQuestions, setQuizParams, setCurrentQuestionId, setQuizAnswer } =
  quizStateSlice.actions;

export default quizStateSlice.reducer;
