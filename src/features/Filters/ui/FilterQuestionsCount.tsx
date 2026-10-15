import styles from "./Filters.module.css";
import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";

interface FilterQuestionsCountProps {
  title: string;
  inactive?: boolean;
  questionsCount: number;
}

export default function FilterQuestionsCount({
  title,
  inactive,
  questionsCount,
}: FilterQuestionsCountProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.filtersList}>
        <li className={styles.filterItem}>
          <FilterButton className={`${inactive ? styles.filterInactive : ""}`}>
            <span>{questionsCount}</span>
          </FilterButton>
        </li>
      </ul>
    </section>
  );
}
