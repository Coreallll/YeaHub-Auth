import styles from "./QuestionPage.module.css";
import Pagination from "@/shared/ui/Pagination/Pagination.tsx";
import { QuestionsList } from "@/widgets/questions/QuestionsList/index.ts";
import QuestionsTitle from "@/widgets/questions/ui/QuestionsTitle.tsx";
import { useQuestions } from "@/entities/question/model/useQuestions.ts";
import QuestionsSidebar from "@/widgets/questions/ui/QuestionsSidebar.tsx";
import { usePagination } from "@/shared/lib/usePagination.ts";

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
