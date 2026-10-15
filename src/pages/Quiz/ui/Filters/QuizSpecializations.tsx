import { useSpecializations } from "@/features/Filters/model/useSpecializations.ts";
import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";
import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import styles from "./QuizFilters.module.css";
import { useState } from "react";

export default function QuizSpecializations() {
  const { watch, setValues } = useFormContext<QuizFormValues>();
  const selectedSpec = watch("specialization");

  function selectSpec(specId: number) {
    setValues({ specialization: specId, skills: [] });
  }

  const { specs } = useSpecializations();

  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const visibleSpecs = showAllSpecs ? specs : specs.slice(0, 10);

  return (
    <section>
      <h3 className={styles.sectionTitle}>Выбор специализации</h3>
      <ul className={styles.filtersList}>
        {visibleSpecs.map((specialization) => {
          const isSelected = selectedSpec === specialization.id;

          return (
            <li key={specialization.id}>
              <FilterButton
                onClick={() => selectSpec(specialization.id)}
                className={`${isSelected ? styles.active : ""}`}
              >
                {specialization.title}
              </FilterButton>
            </li>
          );
        })}
      </ul>
      {specs.length > 4 ? (
        <button
          type="button"
          className={styles.filtersAll}
          onClick={() => {
            setShowAllSpecs((prev) => !prev);
          }}
        >
          {showAllSpecs ? "Скрыть" : "Посмотреть все"}
        </button>
      ) : null}
    </section>
  );
}
