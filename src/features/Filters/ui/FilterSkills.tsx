import { FilterSection } from "@/features/Filters";
import type { Skill } from "@/features/Filters/model/skillsTypes.ts";
import { toggleQueryParams } from "@/shared/utils/toggleQueryParams.ts";
import { useSearchParams } from "react-router-dom";

interface FilterSkillsProps {
  skills: Skill[];
  skillsFilter: string[];
}

export default function FilterSkills({ skills, skillsFilter }: FilterSkillsProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <FilterSection
      title="Навыки"
      items={skills}
      activeValue={skillsFilter}
      setFilter={(item) => {
        const params = toggleQueryParams(searchParams, "skills", item.id);
        setSearchParams(params);
      }}
      getValue={(item) => item.id}
      getLabel={(item) => item.title}
      multiple
      showAllBtn
    />
  );
}
