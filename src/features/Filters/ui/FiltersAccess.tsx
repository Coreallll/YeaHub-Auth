import styles from "./Filters.module.css";
import { useUrlParams } from "@/shared/hooks/useUrlParams.ts";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { replaceQueryParams } from "@/shared/utils/replaceQueryParams.ts";
import { FilterSection } from "@/features/Filters";

export default function FilterAccess() {
  const { searchParams, setSearchParams } = useUrlParams();
  const { accessFilter } = useFilters();

  const accessItems = [
    {
      label: "Для всех",
      value: "true",
    },
    {
      label: "Для участников",
      value: "false",
    },
  ];

  return (
    <section className={styles.section}>
      <FilterSection
        title="Доступ"
        items={accessItems}
        activeValue={accessFilter}
        multiple
        getValue={(access) => access.value}
        getLabel={(access) => access.label}
        setFilter={(access) => {
          const params = replaceQueryParams(searchParams, "isFree", access.value);
          setSearchParams(params);
        }}
      />
    </section>
  );
}
