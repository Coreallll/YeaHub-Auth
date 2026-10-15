import stylesQuestionCard from "@/entities/question/ui/QuestionCard.module.css";
import stylesQuestionsList from "./QuestionsList.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";

export default function QuestionsListSkeleton() {
  return (
    <ul className={stylesQuestionsList.questionList}>
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className={stylesQuestionCard.cardWrapper}
        >
          <h2 className={stylesQuestionCard.questionTitle}>
            <Skeleton
              width={300}
              height={20}
            />
            <Skeleton
              width={20}
              height={20}
            />
          </h2>
        </li>
      ))}
    </ul>
  );
}
