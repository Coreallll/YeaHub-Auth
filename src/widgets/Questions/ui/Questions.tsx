import styles from "./Questions.module.css";
import stylesQuestionsList from "@/widgets/Questions/QuestionsList/ui/QuestionsList.module.css";
import { useNavigate } from "react-router-dom";
import { QuestionsList, QuestionsListSkeleton } from "@/widgets/Questions/QuestionsList";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import { useQuestions } from "@/entities/question/model/useQuestions.ts";
import { usePagination } from "@/shared/lib/usePagination.ts";
import { QuestionsTitle } from "@/widgets/Questions";
import { Pagination } from "@/shared/ui/Pagination";

export interface QuestionsProps {
  collection: Collection;
}

export default function Questions({ collection }: QuestionsProps) {
  const { questionsData, isQuestionsError, totalQuestionsPages, isQuestionsLoading } =
    useQuestions();

  const { currentPage, handleNextPage, handlePrevPage, handlePageClick } = usePagination();

  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <QuestionsTitle isQuestionsLoading={isQuestionsLoading} />
      <hr className={styles.divider} />
      {isQuestionsError ? (
        <p>При загрузке вопросов произошла ошибка</p>
      ) : isQuestionsLoading ? (
        <QuestionsListSkeleton />
      ) : collection.isFree === false ? (
        <ul className={stylesQuestionsList.questionList}>
          <div className={stylesQuestionsList.listEmpty}>
            <h2 className={stylesQuestionsList.emptyTitle}>
              Контент предназначен только для участников
            </h2>
            <button
              className={stylesQuestionsList.emptyBtn}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </button>
          </div>
        </ul>
      ) : (
        <>
          <QuestionsList questionsData={questionsData} />
          <Pagination
            isQuestionsLoading={isQuestionsLoading}
            currentPage={currentPage}
            totalPages={totalQuestionsPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
          />
        </>
      )}
    </div>
  );
}
