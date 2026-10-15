import { memo } from "react";
import QuestionCard from "@/entities/question/ui/QuestionCard.tsx";
import styles from "./QuestionsList.module.css";
import { useClearFilters } from "@/shared/hooks/useClearFilters.ts";
import type { Question } from "@/entities/question/model/questionTypes.ts";
import { QuestionsListSkeleton } from "@/widgets/questions/QuestionsList";

interface QuestionListProps {
  questionsData: Question[];
  isQuestionsLoading?: boolean;
  isQuestionsFetching?: boolean;
  isQuestionsError?: boolean;
}

export default memo(function QuestionsList({
  questionsData,
  isQuestionsLoading,
  isQuestionsFetching,
  isQuestionsError,
}: QuestionListProps) {
  const clearFilters = useClearFilters();

  return (
    <ul className={styles.questionList}>
      {isQuestionsError ? (
        <p>Произошла ошибка при загрузке списка вопросов</p>
      ) : isQuestionsLoading || isQuestionsFetching ? (
        <QuestionsListSkeleton />
      ) : questionsData.length > 0 ? (
        questionsData.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))
      ) : (
        <div className={styles.listEmpty}>
          <h2 className={styles.emptyTitle}>По запросу ничего не найдено</h2>
          <button
            className={styles.emptyBtn}
            onClick={clearFilters}
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </ul>
  );
});
