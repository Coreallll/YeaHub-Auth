import stylesCard from "@/entities/question/ui/QuestionCard.module.css";
import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import { HtmlContent } from "@/shared/ui/HtmlContent";
import type { QuestionProps } from "@/pages/DetailedPage/DetailedQuestionPage/model/types.ts";

export default function DetailedQuestionPageShortAnswer({ question }: QuestionProps) {
  return (
    <div className={styles.shadowWrapper}>
      <h2 className={styles.answerTitle}>Краткий ответ</h2>
      <div className={stylesCard.answer}>
        <HtmlContent answer={question?.shortAnswer} />
      </div>
    </div>
  );
}
