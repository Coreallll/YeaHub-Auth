import { useUrlParams } from "@/shared/hooks/useUrlParams.ts";

export const useFilters = () => {
  const { searchParams } = useUrlParams();

  const specFilter = searchParams.get("specializations") ?? "11";

  const skillsFilter = searchParams.get("skills")?.split(",") ?? [];

  const complexityFilter = searchParams.get("complexity")?.split(",") ?? [];

  const rateFilter = searchParams.get("rate")?.split(",") ?? [];

  const accessFilter = searchParams.get("isFree") ?? "";

  const searchFilter = searchParams.get("search") ?? "";

  const isFree = accessFilter === "" ? undefined : accessFilter === "true";

  return {
    specFilter,
    skillsFilter,
    complexityFilter,
    rateFilter,
    accessFilter,
    searchFilter,
    isFree,
  };
};
