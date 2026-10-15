import { useEffect, useRef, useState } from "react";
import styles from "./QuestionCard.module.css";
import arrowIcon from "@/shared/assets/icons/arrow.svg";
import arrowRightDetailed from "@/shared/assets/icons/arrowRightDetailed.svg";
import { useNavigate, useParams } from "react-router-dom";
import type { Question } from "@/entities/question/model/questionTypes.ts";
import { HtmlContent } from "@/shared/ui/HtmlContent";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  const navigate = useNavigate();

  const { collectionId } = useParams();

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <li className={`${styles.cardWrapper} ${open ? styles.cardOpen : ""}`}>
      <h2
        className={styles.questionTitle}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.questionTitleText}>{question.title}</span>
        <img
          className={styles.questionTitleArrow}
          src={arrowIcon}
          alt="Стрелка"
        />
      </h2>

      <div
        ref={contentRef}
        className={styles.answerWrapper}
        style={{
          height: `${height}px`,
        }}
      >
        <div className={styles.rating}>
          <div className={styles.ratingWrap}>
            <span className={styles.ratingText}>Рейтинг: </span>
            <span className={styles.ratingValue}>{question.rate}</span>
          </div>
          <div className={styles.ratingWrap}>
            <span className={styles.ratingText}>Сложность: </span>
            <span className={styles.ratingValue}>{question.complexity}</span>
          </div>
        </div>
        <div className={styles.answer}>
          <HtmlContent answer={question.shortAnswer} />
        </div>
        <button
          className={styles.detailedBtn}
          onClick={() => navigate(`/collections/${collectionId}/questions/${question.id}`)}
        >
          Подробнее
          <img
            className={styles.detailedBtnIcon}
            src={arrowRightDetailed}
            alt="Стрелка"
          />
        </button>
      </div>
    </li>
  );
}
