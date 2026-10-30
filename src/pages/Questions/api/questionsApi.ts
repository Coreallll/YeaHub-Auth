import { baseApi } from "@/shared/api/baseApi.ts";
import type { Question, QuestionsResponse } from "@/entities/question/model/questionTypes.ts";

interface QuestionFilters {
  specFilter?: string;
  skillsFilter?: string[];
  complexityFilter?: string[];
  rateFilter?: string[];
  collectionId?: number;
}
interface GetQuestionsArgs extends QuestionFilters {
  isPrivate: boolean;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], GetQuestionsArgs>({
      async queryFn(
        { specFilter, skillsFilter, complexityFilter, rateFilter, collectionId },
        _api,
        _extraOptions,
        baseQuery,
      ) {
        const limit = 100;

        const url = "questions/public-questions";

        const params = {
          limit,
          ...(specFilter && {
            specializationId: specFilter,
          }),
          ...(skillsFilter &&
            skillsFilter?.length > 0 && {
              skills: skillsFilter.join(","),
            }),
          ...(complexityFilter &&
            complexityFilter?.length > 0 && {
              complexity: complexityFilter.join(","),
            }),
          ...(rateFilter &&
            rateFilter?.length > 0 && {
              rate: rateFilter.join(","),
            }),
          ...(collectionId && {
            collection: collectionId,
          }),
        };

        const allQuestions: Question[] = [];

        let totalPages = 1;

        for (let page = 1; page <= totalPages; page++) {
          const result = await baseQuery({
            url,
            params: {
              ...params,
              page,
            },
          });

          if (result.error) {
            return { error: result.error };
          }

          const response = result.data as QuestionsResponse;

          allQuestions.push(...response.data);

          if (page === 1) {
            totalPages = Math.ceil(response.total / limit);
          }
        }

        return { data: allQuestions };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
