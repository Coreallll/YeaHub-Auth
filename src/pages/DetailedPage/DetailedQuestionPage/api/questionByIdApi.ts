import { baseApi } from "@/shared/api/baseApi.ts";
import type { Question } from "@/entities/question/model/questionTypes.ts";

export const questionByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionById: builder.query<Question, number>({
      query: (questionId) => ({
        url: `/questions/public-questions/${questionId}`,
      }),
    }),
  }),
});

export const { useGetQuestionByIdQuery } = questionByIdApi;
