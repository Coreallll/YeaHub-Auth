import { useQuizForm } from "@/pages/Quiz/model/useQuizForm.ts";
import { FormProvider } from "react-hook-form";
import styles from "./Quiz.module.css";
import QuizSpecializations from "@/pages/Quiz/ui/Filters/QuizSpecializations.tsx";
import QuizSkills from "@/pages/Quiz/ui/Filters/QuizSkills.tsx";
import QuizComplexity from "@/pages/Quiz/ui/Filters/QuizComplexity.tsx";
import QuizQuestionsLimit from "@/pages/Quiz/ui/Filters/QuizQuestionsLimit.tsx";
import ArrowRight from "@/shared/assets/icons/quizArrowRightBtn.svg?react";

export interface QuizFormValues {
  specialization: number;
  skills: number[];
  complexity: number[];
  limit: number;
}

export default function QuizPage() {
  const { methods, onSubmit } = useQuizForm();

  return (
    <div className={styles.quizWrapper}>
      <h2 className={styles.quizPageTitle}>Собеседование</h2>
      <form
        className={styles.quizForm}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <div className={styles.quizFormFilters}>
            <div className={styles.fetchBlocks}>
              <QuizSpecializations />
              <QuizSkills />
            </div>
            <div className={styles.staticBlocks}>
              <QuizComplexity />
              <QuizQuestionsLimit />
            </div>
          </div>
        </FormProvider>
        <button
          className={styles.sumbitBtn}
          type="submit"
        >
          Начать
          <ArrowRight />
        </button>
      </form>
    </div>
  );
}
