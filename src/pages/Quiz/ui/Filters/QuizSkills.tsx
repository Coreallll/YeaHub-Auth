import FilterButton from "@/shared/ui/FilterButton/FilterButton.tsx";
import { useSkills } from "@/features/Filters/model/useSkills.ts";
import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import styles from "./QuizFilters.module.css";
import { useState } from "react";

export default function QuizSkills() {
  const { watch, setValue } = useFormContext<QuizFormValues>();
  const spec = watch("specialization");
  const { skills } = useSkills(String(spec));
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 20);

  const selectedSkills = watch("skills");

  function toggleSkill(id: number) {
    const isSelected = selectedSkills.includes(id);
    if (isSelected) {
      setValue(
        "skills",
        selectedSkills.filter((skillId) => skillId !== id),
      );
    } else {
      setValue("skills", [...selectedSkills, id]);
    }
  }

  return (
    <section>
      <h3 className={styles.sectionTitle}>Категории вопросов</h3>
      <ul className={styles.filtersList}>
        {visibleSkills.map((skill) => {
          const isSelected = selectedSkills.includes(skill.id);
          return (
            <li key={skill.id}>
              <FilterButton
                onClick={() => toggleSkill(skill.id)}
                className={isSelected ? styles.active : ""}
              >
                {skill.imageSrc && (
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                  />
                )}
                {skill.title}
              </FilterButton>
            </li>
          );
        })}
      </ul>
      {skills.length > 20 ? (
        <button
          type="button"
          className={styles.filtersAll}
          onClick={() => {
            setShowAllSkills((prev) => !prev);
          }}
        >
          {showAllSkills ? "Скрыть" : "Посмотреть все"}
        </button>
      ) : null}
    </section>
  );
}
