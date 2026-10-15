import { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce.ts";
import { useUrlParams } from "@/shared/hooks/useUrlParams.ts";

export default function useSearch() {
  const { searchParams, setSearchParams } = useUrlParams();

  const appliedSearch = searchParams.get("search") ?? "";
  const [searchDraft, setSearchDraft] = useState(appliedSearch);
  const [syncedSearch, setSyncedSearch] = useState(appliedSearch);
  const debouncedSearch = useDebounce(searchDraft, 800);

  if (appliedSearch !== syncedSearch) {
    setSyncedSearch(appliedSearch);
    setSearchDraft(appliedSearch);
  }

  const setSearchParamsRef = useRef(setSearchParams);
  useEffect(() => {
    setSearchParamsRef.current = setSearchParams;
  });

  useEffect(() => {
    const normalizedSearch = debouncedSearch.trim();

    setSearchParamsRef.current(
      (prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (normalizedSearch === (prevParams.get("search") ?? "")) return params;

        if (normalizedSearch) {
          params.set("search", normalizedSearch);
        } else {
          params.delete("search");
        }

        params.delete("page");

        return params;
      },
      {
        replace: true,
      },
    );
  }, [debouncedSearch]);

  return {
    searchDraft,
    setSearchDraft,
  };
}
