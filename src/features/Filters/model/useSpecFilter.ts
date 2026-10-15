import { useUrlParams } from "@/shared/hooks/useUrlParams.ts";
import { useFilters } from "@/features/Filters/model/useFilters.ts";

export const useSpecFilter = () => {
  const { setSearchParams } = useUrlParams();

  const { specFilter } = useFilters();

  const setSpecFilter = (nextSpec: string) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set("specializations", nextSpec);
      params.delete("page");

      return params;
    });
  };

  return {
    specFilter,
    setSpecFilter,
  };
};
