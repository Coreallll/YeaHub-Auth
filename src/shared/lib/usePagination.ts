import { useCallback } from "react";
import { useUrlParams } from "@/shared/hooks/useUrlParams.ts";

export function usePagination() {
  const cardsOnPage = 10;
  const { searchParams, setSearchParams } = useUrlParams();
  const pageFromParams = Number(searchParams.get("page") ?? 1);
  const currentPage = Number.isInteger(pageFromParams) && pageFromParams > 0 ? pageFromParams : 1;

  const changePage = useCallback(
    (page: number) => {
      const nextPage = Math.max(page, 1);

      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        params.set("page", String(nextPage));
        return params;
      });
    },
    [setSearchParams],
  );

  function handleNextPage() {
    changePage(currentPage + 1);
  }

  function handlePrevPage() {
    changePage(currentPage - 1);
  }

  function handlePageClick(pageNumber: number) {
    changePage(pageNumber);
  }

  return {
    cardsOnPage,
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    changePage,
  };
}
