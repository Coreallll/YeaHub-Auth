import { usePagination } from "@/shared/lib/usePagination.ts";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { useGetCollectionsQuery } from "@/pages/Collections/api/collectionsApi.ts";
import { useEffect } from "react";

export const useCollections = () => {
  const { currentPage, cardsOnPage, changePage } = usePagination();
  const { specFilter, searchFilter, isFree } = useFilters();

  const {
    data: collections,
    isError,
    isLoading: isCollectionsLoading,
    isFetching: isCollectionsFetching,
  } = useGetCollectionsQuery({
    specs: specFilter,
    search: searchFilter,
    accessFilter: isFree,
  });

  const collectionsWithQuestions = collections?.filter(
    (collection) => collection.questionsCount > 0,
  );

  const totalCollectionsPages = collectionsWithQuestions
    ? Math.ceil(collectionsWithQuestions.length / cardsOnPage)
    : 0;

  const startPageIndex = (currentPage - 1) * cardsOnPage;

  const collectionsData = collectionsWithQuestions?.slice(
    startPageIndex,
    startPageIndex + cardsOnPage,
  );

  useEffect(() => {
    if (isCollectionsFetching) return;
    if (!collections) return;
    if (totalCollectionsPages > 0 && currentPage > totalCollectionsPages) {
      changePage(totalCollectionsPages);
    }
  }, [currentPage, totalCollectionsPages, isCollectionsFetching, collections, changePage]);

  return {
    collectionsData: collectionsData ?? [],
    isCollectionsFetching,
    isCollectionsLoading,
    isError,
    currentPage,
    totalCollectionsPages,
    cardsOnPage,
  };
};
