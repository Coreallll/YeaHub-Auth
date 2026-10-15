import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import type { Question } from "@/entities/question/model/questionTypes.ts";
import DetailedSidebarSkeleton from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarSkeleton.tsx";
import QuestionComplexity from "@/pages/DetailedPage/DetailedQuestionPage/DetailedQuestionPageSidebar/ui/QuestionComplexity.tsx";

import DetailedSidebarTags from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarTags.tsx";
import DetailedSidebarAuthor from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarAuthor.tsx";
import { FilterSection } from "@/features/Filters";

interface DetailedQuestionPageSidebarProps {
  question: Question | null;
  isQuestionLoading?: boolean;
  className?: string | undefined;
}

export default function DetailedQuestionPageSidebar({
  question,
  isQuestionLoading,
  className = "",
}: DetailedQuestionPageSidebarProps) {
  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      {isQuestionLoading ? (
        <DetailedSidebarSkeleton />
      ) : (
        question && (
          <>
            <QuestionComplexity question={question} />
            <FilterSection
              title="Навыки:"
              items={question?.questionSkills}
              getValue={(skill) => skill.id}
              getLabel={(skill) => skill.title}
              inactive
            />
            <DetailedSidebarTags item={question} />
            <DetailedSidebarAuthor item={question} />
          </>
        )
      )}
    </aside>
  );
}
