import { useNavigate, useParams } from "react-router-dom";
import DetailedQuestionPageNavigate from "./DetailedQuestionPageNavigate.tsx";
import DetailedQuestionPageShortAnswer from "./DetailedQuestionPageShortAnswer.tsx";
import DetailedQuestionPageLongAnswer from "./DetailedQuestionPageLongAnswer.tsx";
import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import DetailedQuestionPageSkeleton from "./DetailedQuestionPageSkeleton.tsx";
import arrowReturn from "@/shared/assets/icons/arrowReturn.svg";
import DetailedQuestionTitle from "./DetailedQuestionTitle.tsx";
import { useFilters } from "@/features/Filters/model/useFilters.ts";
import { useGetQuestionsQuery } from "@/pages/Questions/api/questionsApi.ts";
import { useGetQuestionByIdQuery } from "@/pages/DetailedPage/DetailedQuestionPage/api/questionByIdApi.ts";
import { useQuestionNav } from "@/entities/question/model/useQuestionsNav.ts";
import { DetailedQuestionPageSidebar } from "@/pages/DetailedPage/DetailedQuestionPage/DetailedQuestionPageSidebar";

export default function DetailedQuestionPage() {
  const navigate = useNavigate();

  const { specFilter } = useFilters();
  const { collectionId } = useParams();
  const { questionId } = useParams();

  const { data: allDetailedQuestions = [] } = useGetQuestionsQuery({
    specFilter,
    collectionId: Number(collectionId),
  });

  const { data: question, isLoading: isQuestionLoading } = useGetQuestionByIdQuery(
    Number(questionId),
  );
  const { isPrevDisabled, isNextDisabled, prevQuestionId, nextQuestionId } = useQuestionNav(
    allDetailedQuestions,
    Number(questionId),
  );

  if (isQuestionLoading) {
    return <DetailedQuestionPageSkeleton />;
  }

  if (!question) {
    return (
      <div className="wrapper">
        <div className="mainWrapper">
          <div>Вопрос не найден</div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate(`/collections/${collectionId}`)}
      >
        <img
          src={arrowReturn}
          alt="Стрелка назад"
        />
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedQuestionTitle question={question} />
          <DetailedQuestionPageNavigate
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            prevQuestionId={prevQuestionId}
            nextQuestionId={nextQuestionId}
          />
          <DetailedQuestionPageShortAnswer question={question} />
          <DetailedQuestionPageLongAnswer question={question} />
        </div>
        <DetailedQuestionPageSidebar
          question={question}
          isQuestionLoading={isQuestionLoading}
        />
      </div>
    </div>
  );
}
