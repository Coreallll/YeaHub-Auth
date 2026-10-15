import { toggleQueryArrayValues } from "@/shared/utils/toggleQueryArrayValue.ts";
import { FilterSection } from "@/features/Filters";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { useSearchParams } from "react-router-dom";

export default function FilterComplexity() {
  const { complexityFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const complexityOptions = [
    { label: "1-3", value: [1, 2, 3] },
    { label: "4-6", value: [4, 5, 6] },
    { label: "7-8", value: [7, 8] },
    { label: "9-10", value: [9, 10] },
  ];

  return (
    <FilterSection
      title="Уровень сложности"
      items={complexityOptions}
      activeValue={complexityFilter}
      multiple
      getValue={(complexity) => complexity.value.join(",")}
      getLabel={(complexity) => complexity.label}
      isActive={(complexity, activeValue) =>
        complexity.value.every((value) => activeValue?.includes(String(value)))
      }
      setFilter={(item) => {
        const params = toggleQueryArrayValues(searchParams, "complexity", item.value);

        setSearchParams(params);
      }}
    />
  );
}
