import stylesQuestions from "./Questions.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import stylesQuestionList from "@/widgets/Questions/QuestionsList/ui/QuestionsList.module.css";
import { QuestionsListSkeleton } from "@/widgets/Questions/QuestionsList";

export default function QuestionsSkeleton() {
  return (
    <>
      <Skeleton
        width={300}
        height={24}
      />
      <hr className={stylesQuestions.divider} />
      <ul className={stylesQuestionList.questionList}>
        <QuestionsListSkeleton />
      </ul>
    </>
  );
}
