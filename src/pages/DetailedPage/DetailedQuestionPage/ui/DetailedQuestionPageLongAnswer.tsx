import stylesCard from "@/entities/question/ui/QuestionCard.module.css";
import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import { useEffect, useRef, useState } from "react";
import arrowDown from "@/shared/assets/icons/arrowDown.svg";
import { HtmlContent } from "@/shared/ui/HtmlContent";
import type { QuestionProps } from "@/pages/DetailedPage/DetailedQuestionPage/model/types.ts";

export default function DetailedQuestionPageLongAnswer({ question }: QuestionProps) {
  const [openAnswer, setOpenAnswer] = useState(false);
  const longAnswerRef = useRef<HTMLDivElement>(null);
  const [heightAnswer, setHeightAnswer] = useState(400);

  useEffect(() => {
    if (!longAnswerRef.current) return;
    setHeightAnswer(openAnswer ? longAnswerRef.current.scrollHeight : 400);
  }, [openAnswer]);

  return (
    <div className={styles.shadowWrapper}>
      <h2 className={styles.answerTitle}>Развернутый ответ</h2>
      <div
        ref={longAnswerRef}
        className={`${stylesCard.answer} ${styles.longAnswerWrapper}`}
        style={{
          height: `${heightAnswer}px`,
        }}
      >
        <HtmlContent answer={question.longAnswer} />
        {!openAnswer && <div className={styles.gradient}></div>}
      </div>
      <button
        className={`${styles.openBtn} ${openAnswer && styles.active}`}
        onClick={() => setOpenAnswer((prev) => !prev)}
      >
        {!openAnswer ? <span>Развернуть</span> : <span>Свернуть</span>}
        <img
          className={`${styles.iconArrowDown} ${openAnswer && styles.active}`}
          src={arrowDown}
          alt="Стрелка"
        />
      </button>
    </div>
  );
}
