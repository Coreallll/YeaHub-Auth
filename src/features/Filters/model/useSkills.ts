import { useGetSkillsQuery } from "@/features/Filters/api/skillsApi.ts";
import { skipToken } from "@reduxjs/toolkit/query";

export const useSkills = (spec?: string) => {
  const {
    data: skills = [],
    isLoading: isSkillsLoading,
    isFetching: isSkillsFetching,
    isError: isSkillsError,
  } = useGetSkillsQuery(spec !== undefined ? { spec } : skipToken);

  return {
    skills,
    isSkillsLoading,
    isSkillsFetching,
    isSkillsError,
  };
};
