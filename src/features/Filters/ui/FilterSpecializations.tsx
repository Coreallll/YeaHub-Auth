import type { Specialization } from "@/features/Filters/model/specializationTypes.ts";
import { useSpecFilter } from "@/features/Filters/model/useSpecFilter.ts";
import { FilterSection } from "@/features/Filters";

interface FilterSpecializationsProps {
  specs: Specialization[];
}
export default function FilterSpecializations({ specs }: FilterSpecializationsProps) {
  const { specFilter, setSpecFilter } = useSpecFilter();

  return (
    <FilterSection
      title="Специализация"
      items={specs}
      activeValue={specFilter}
      setFilter={(spec) => {
        setSpecFilter(String(spec.id));
      }}
      getLabel={(spec) => spec.title}
      getValue={(spec) => spec.id}
      showAllBtn
    />
  );
}
