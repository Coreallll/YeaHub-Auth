import styles from "./Filters.module.css";
import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";

interface FilterAccessProps {
  title: string;
  inactive?: boolean;
  isFree?: boolean;
}

export default function FilterIsFree({ title, inactive, isFree }: FilterAccessProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.filtersList}>
        <li className={styles.filterItem}>
          <FilterButton className={`${inactive ? styles.filterInactive : ""}`}>
            <span>{isFree ? "Для всех" : "Для участников"}</span>
          </FilterButton>
        </li>
      </ul>
    </section>
  );
}
