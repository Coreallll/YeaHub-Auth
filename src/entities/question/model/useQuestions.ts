import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePagination } from "@/shared/lib/usePagination.ts";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { useGetQuestionsQuery } from "@/pages/Questions/api/questionsApi.ts";

interface UseQuestionsOptions {
  isFree?: boolean;
}

export const useQuestions = ({ isFree }: UseQuestionsOptions) => {
  const { currentPage, cardsOnPage, changePage } = usePagination();

  const { specFilter, skillsFilter, complexityFilter, rateFilter } = useFilters();

  const { collectionId } = useParams();

  const {
    data: questions,
    isLoading,
    isError: isQuestionsError,
    isFetching: isQuestionsFetching,
  } = useGetQuestionsQuery(
    {
      specFilter,
      skillsFilter,
      complexityFilter,
      rateFilter,
      collectionId: Number(collectionId),
      isPrivate: false,
    },
    {
      skip: isFree !== true,
    },
  );

  const isQuestionsLoading = isFree === undefined || isLoading;

  const totalQuestionsPages = questions ? Math.ceil(questions.length / cardsOnPage) : 0;

  const startPageIndex = (currentPage - 1) * cardsOnPage;

  const questionsData = questions?.slice(startPageIndex, startPageIndex + cardsOnPage);

  useEffect(() => {
    if (!questions) return;

    if (totalQuestionsPages > 0 && currentPage > totalQuestionsPages) {
      changePage(totalQuestionsPages);
    }
  }, [currentPage, totalQuestionsPages, questions, changePage]);

  return {
    questionsData: questionsData ?? [],
    isQuestionsLoading,
    isQuestionsFetching,
    isQuestionsError,
    currentPage,
    totalQuestionsPages,
    cardsOnPage,
  };
};
