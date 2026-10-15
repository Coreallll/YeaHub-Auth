import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import arrowLeft from "@/shared/assets/icons/arrowLeft.svg";
import arrowRight from "@/shared/assets/icons/arrowRight.svg";
import { useNavigate, useParams } from "react-router-dom";

interface DetailedQuestionPageNavigateProps {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  prevQuestionId: number | null;
  nextQuestionId: number | null;
}

export default function DetailedQuestionPageNavigate({
  isPrevDisabled,
  isNextDisabled,
  prevQuestionId,
  nextQuestionId,
}: DetailedQuestionPageNavigateProps) {
  const navigate = useNavigate();
  const { collectionId } = useParams();

  return (
    <div className={styles.shadowWrapper}>
      <div className={styles.buttonsFlex}>
        <button
          disabled={isPrevDisabled}
          className={`${styles.pageNavBtn} ${isPrevDisabled && styles.disabled}`}
          onClick={() => navigate(`/collections/${collectionId}/questions/${prevQuestionId}`)}
        >
          <img
            src={arrowLeft}
            alt="Стрелка влево"
          />
          Предыдущий
        </button>
        <button
          disabled={isNextDisabled}
          className={`${styles.pageNavBtn} ${isNextDisabled && styles.disabled}`}
          onClick={() => navigate(`/collections/${collectionId}/questions/${nextQuestionId}`)}
        >
          Следующий
          <img
            src={arrowRight}
            alt="Стрелка вправо"
          />
        </button>
      </div>
    </div>
  );
}
