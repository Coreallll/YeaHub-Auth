import { FilterSection } from "@/features/Filters";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { toggleQueryParams } from "@/shared/utils/toggleQueryParams.ts";
import { useSearchParams } from "react-router-dom";

export default function FilterRating() {
  const { rateFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const ratings = [1, 2, 3, 4, 5];

  return (
    <FilterSection
      title="Рейтинг"
      items={ratings}
      activeValue={rateFilter}
      multiple
      getValue={(rating) => String(rating)}
      getLabel={(rating) => String(rating)}
      setFilter={(rating) => {
        const params = toggleQueryParams(searchParams, "rate", rating);
        setSearchParams(params);
      }}
    />
  );
}
