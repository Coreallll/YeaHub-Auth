import { baseApi } from "@/shared/api/baseApi.ts";
import type { Question, QuestionsResponse } from "@/entities/question/model/questionTypes.ts";

interface QuestionFilters {
  specFilter?: string;
  skillsFilter?: string[];
  complexityFilter?: string[];
  rateFilter?: string[];
  collectionId?: number;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], QuestionFilters>({
      async queryFn(
        { specFilter, skillsFilter, complexityFilter, rateFilter, collectionId },
        _api,
        _extraOptions,
        baseQuery,
      ) {
        const limit = 100;

        const firstResult = await baseQuery({
          url: "questions/public-questions",
          params: {
            page: 1,
            limit,
            ...(specFilter && { specializationId: specFilter }),
            ...(skillsFilter &&
              skillsFilter.length > 0 && {
                skills: skillsFilter.join(","),
              }),
            ...(complexityFilter &&
              complexityFilter.length > 0 && {
                complexity: complexityFilter.join(","),
              }),
            ...(rateFilter && rateFilter.length > 0 && { rate: rateFilter.join(",") }),
            ...(collectionId && { collection: collectionId }),
          },
        });

        if (firstResult.error) {
          return { error: firstResult.error };
        }

        const firstResponse = firstResult.data as QuestionsResponse;

        const allQuestions = [...firstResponse.data];

        const totalPages = Math.ceil(firstResponse.total / firstResponse.limit);

        for (let page = 2; page <= totalPages; page++) {
          const result = await baseQuery({
            url: "questions/public-questions",
            params: {
              page,
              limit,
              ...(specFilter && { specializationId: specFilter }),
              ...(skillsFilter &&
                skillsFilter.length > 0 && {
                  skills: skillsFilter.join(","),
                }),
              ...(complexityFilter &&
                complexityFilter.length > 0 && {
                  complexity: complexityFilter.join(","),
                }),
              ...(rateFilter && rateFilter.length > 0 && { rate: rateFilter.join(",") }),
              ...(collectionId && { collection: collectionId }),
            },
          });

          if (result.error) {
            return { error: result.error };
          }

          const response = result.data as QuestionsResponse;

          allQuestions.push(...response.data);
        }

        return { data: allQuestions };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
