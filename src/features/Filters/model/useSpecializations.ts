import { useGetSpecializationsQuery } from "@/features/Filters/api/specializationsApi.ts";

export const useSpecializations = () => {
  const {
    data: specs = [],
    isLoading: isSpecsLoading,
    isError: isSpecsError,
  } = useGetSpecializationsQuery();

  return {
    specs,
    isSpecsLoading,
    isSpecsError,
  };
};
