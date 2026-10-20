import styles from "./QuestionPage.module.css";
import { QuestionsList } from "@/widgets/Questions/QuestionsList/index.ts";
import { useQuestions } from "@/entities/question/model/useQuestions.ts";
import { usePagination } from "@/shared/lib/usePagination.ts";
import { QuestionsSidebar, QuestionsTitle } from "@/widgets/Questions";
import { Pagination } from "@/shared/ui/Pagination";

export default function QuestionsPage() {
  const {
    questionsData,
    isQuestionsLoading,
    isQuestionsFetching,
    isQuestionsError,
    currentPage,
    totalQuestionsPages,
  } = useQuestions();
  const { handleNextPage, handlePrevPage, handlePageClick } = usePagination();

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <QuestionsTitle isQuestionsLoading={isQuestionsLoading} />
        <hr className={styles.divider} />
        <QuestionsList
          questionsData={questionsData}
          isQuestionsFetching={isQuestionsFetching}
          isQuestionsLoading={isQuestionsLoading}
          isQuestionsError={isQuestionsError}
        />
        <Pagination
          isQuestionsLoading={isQuestionsLoading}
          currentPage={currentPage}
          totalPages={totalQuestionsPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      </div>
      <QuestionsSidebar />
    </div>
  );
}
