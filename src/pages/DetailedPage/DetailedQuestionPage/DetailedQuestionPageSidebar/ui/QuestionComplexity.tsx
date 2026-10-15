import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import stylesCard from "@/entities/question/ui/QuestionCard.module.css";
import styles from "./DetailedQuestionPageSidebar.module.css";
import type { QuestionProps } from "@/pages/DetailedPage/DetailedQuestionPage/model/types.ts";

export default function QuestionComplexity({ question }: QuestionProps) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={stylesSidebar.sectionTitle}>Уровень:</h3>
      <div className={`${stylesCard.rating} ${styles.ratingWrapper}`}>
        <div className={stylesCard.ratingWrap}>
          <span className={stylesCard.ratingText}>Сложность: </span>
          <span className={stylesCard.ratingValue}>{question.complexity}</span>
        </div>
        <div className={stylesCard.ratingWrap}>
          <span className={stylesCard.ratingText}>Рейтинг: </span>
          <span className={stylesCard.ratingValue}>{question.rate}</span>
        </div>
      </div>
    </section>
  );
}
