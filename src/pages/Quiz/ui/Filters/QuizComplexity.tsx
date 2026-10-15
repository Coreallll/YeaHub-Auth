import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";
import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import styles from "./QuizFilters.module.css";

export default function QuizComplexity() {
  const complexityOptions = [
    { label: "1-3", value: [1, 2, 3] },
    { label: "4-6", value: [4, 5, 6] },
    { label: "7-8", value: [7, 8] },
    { label: "9-10", value: [9, 10] },
  ];

  const { watch, setValue } = useFormContext<QuizFormValues>();
  const selectedComplexity = watch("complexity");

  function toggleComplexity(values: number[]) {
    const isSelected = values.every((value) => selectedComplexity.includes(value));
    if (isSelected) {
      setValue(
        "complexity",
        selectedComplexity.filter((value) => !values.includes(value)),
      );
    } else {
      setValue("complexity", [...selectedComplexity, ...values]);
    }
  }

  return (
    <section>
      <h3 className={styles.sectionTitle}>Уровень сложности</h3>
      <ul className={styles.filtersList}>
        {complexityOptions.map((complexity) => {
          const isSelected = complexity.value.every((value) => selectedComplexity.includes(value));
          return (
            <li key={complexity.label}>
              <FilterButton
                onClick={() => toggleComplexity(complexity.value)}
                className={`${isSelected ? styles.active : ""}`}
              >
                {complexity.label}
              </FilterButton>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
