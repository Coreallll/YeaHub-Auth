import stylesQuestions from "./Questions.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import stylesQuestionList from "@/widgets/questions/QuestionsList/ui/QuestionsList.module.css";
import { QuestionsListSkeleton } from "@/widgets/questions/QuestionsList";

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
