import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "@/pages/Quiz/ui/QuizPage.tsx";
import styles from "./QuizFilters.module.css";

export default function QuizQuestionsLimit() {
  const { watch, setValue } = useFormContext<QuizFormValues>();
  const quizQuestionsLimit = watch("limit");

  function countDecrement() {
    if (quizQuestionsLimit <= 1) return;
    setValue("limit", quizQuestionsLimit - 1);
  }
  function countIncrement() {
    setValue("limit", quizQuestionsLimit + 1);
  }

  return (
    <section>
      <h3 className={styles.sectionTitle}>Количество вопросов</h3>
      <div className={styles.counter}>
        <button
          type="button"
          className={styles.counterBtn}
          onClick={countDecrement}
        >
          -
        </button>
        <span className={styles.counterNumber}>{quizQuestionsLimit}</span>
        <button
          type="button"
          className={styles.counterBtn}
          onClick={countIncrement}
        >
          +
        </button>
      </div>
    </section>
  );
}
