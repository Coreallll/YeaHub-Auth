import styles from "@/features/Filters/ui/Filters.module.css";
import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";
import { useState } from "react";
import { FilterIsFree, FilterQuestionsCount } from "@/features/Filters";

type ActiveValue = string | string[] | null;

export interface FilterSectionProps<T> {
  title: string;
  items?: T[];
  activeValue?: ActiveValue;

  getValue?: (item: T) => string | number;
  getLabel?: (item: T) => string;
  getImageSrc?: (item: T) => string | null | undefined;

  setFilter?: (item: T) => void;
  multiple?: boolean;
  showAllBtn?: boolean;
  inactive?: boolean;

  isActive?: (item: T, activeValue: ActiveValue) => boolean;

  isFree?: boolean;
  questionsCount?: number;
}

export default function FilterSection<T>({
  title,
  items,
  activeValue,
  setFilter,
  getValue,
  getLabel,
  getImageSrc,
  multiple = false,
  showAllBtn,
  isActive: getIsActive,
  inactive,
  isFree,
  questionsCount,
}: FilterSectionProps<T>) {
  const [showAll, setShowAll] = useState(false);

  if (isFree !== undefined) {
    return (
      <FilterIsFree
        title={title}
        isFree={isFree}
        inactive={inactive ?? false}
      />
    );
  }
  if (questionsCount) {
    return (
      <FilterQuestionsCount
        title={title}
        inactive={inactive ?? false}
        questionsCount={questionsCount}
      />
    );
  }

  if (!items || !getValue) return <div>Произошла ошибка при загрузке фильтров</div>;

  const visibleItems = showAll ? items : items?.slice(0, 5);

  const renderedItems = visibleItems.map((item) => {
    const value = String(getValue(item));
    const label = getLabel ? getLabel(item) : String(item);
    const isActive =
      activeValue && getIsActive
        ? getIsActive(item, activeValue)
        : multiple
          ? (activeValue || []).includes(value)
          : activeValue === value;
    const imageSrc = getImageSrc?.(item);

    return (
      <li
        className={styles.filterItem}
        key={value}
      >
        <FilterButton
          className={`${isActive ? styles.filterActive : ""} ${inactive ? styles.filterInactive : ""}`}
          onClick={() => {
            if (setFilter) {
              setFilter(item);
            }
          }}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={label}
            />
          )}
          <span>{label}</span>
        </FilterButton>
      </li>
    );
  });

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.filtersList}>{renderedItems}</ul>
      {showAllBtn && renderedItems.length > 4 ? (
        <button
          className={styles.filtersAll}
          onClick={() => {
            setShowAll((prev) => !prev);
          }}
        >
          {showAll ? "Скрыть" : "Посмотреть все"}
        </button>
      ) : null}
    </section>
  );
}
