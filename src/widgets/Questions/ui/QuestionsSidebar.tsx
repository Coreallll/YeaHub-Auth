import { SidebarLayout } from "@/shared/ui/Sidebar/SidebarLayout.tsx";
import Search from "@/shared/ui/Search/Search.tsx";
import {
  FilterRating,
  FilterSectionSkeleton,
  FilterSkills,
  FilterSpecializations,
} from "@/features/Filters";
import { SidebarSkeleton } from "@/shared/ui/Sidebar";
import FilterComplexity from "@/features/Filters/ui/FilterComplexity.tsx";
import { useSpecializations } from "@/features/Filters/model/useSpecializations.ts";
import { useSkills } from "@/features/Filters/model/useSkills.ts";
import { useFilters } from "@/features/Filters/model/useFilters.ts";

interface QuestionsSidebarProps {
  className?: string | undefined;
}

export default function QuestionsSidebar({ className = "" }: QuestionsSidebarProps) {
  const { specs, isSpecsLoading, isSpecsError } = useSpecializations();
  const { specFilter, skillsFilter } = useFilters();
  const { skills, isSkillsLoading, isSkillsFetching, isSkillsError } = useSkills(
    String(specFilter),
  );
  return (
    <SidebarLayout className={className}>
      {isSpecsLoading || isSkillsLoading ? (
        <SidebarSkeleton />
      ) : (
        <>
          <Search />
          {isSpecsError ? (
            <p>Произошла ошибка при загрузке специализаций</p>
          ) : (
            <FilterSpecializations specs={specs} />
          )}
          {isSkillsError ? (
            <p>Произошла ошибка при загрузке навыков</p>
          ) : isSkillsFetching ? (
            <FilterSectionSkeleton
              widthSkeletonFilter={100}
              borderRadiusFilter={12}
              showAllBtn
            />
          ) : skills.length === 0 ? (
            <p>Для этой специализации навыки не найдены</p>
          ) : (
            <FilterSkills
              skillsFilter={skillsFilter}
              skills={skills}
            />
          )}
          <FilterComplexity />
          <FilterRating />
        </>
      )}
    </SidebarLayout>
  );
}
