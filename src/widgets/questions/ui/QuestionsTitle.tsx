import { useEffect, useRef } from "react";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import styles from "./Questions.module.css";
import { useSpecFilter } from "@/features/Filters/model/useSpecFilter.ts";
import { useSidebarState } from "@/shared/hooks/useSidebarState.ts";
import { Drawer } from "@/shared/ui/Drawer";
import filtersBtn from "@/shared/assets/icons/filtersBtn.svg";
import closeBtn from "@/shared/assets/icons/closeBtn.svg";
import QuestionsSidebar from "@/widgets/questions/ui/QuestionsSidebar.tsx";
import { useSpecializations } from "@/features/Filters/model/useSpecializations.ts";
import { useSkills } from "@/features/Filters/model/useSkills.ts";

interface QuestionsTitleProps {
  isQuestionsLoading: boolean;
}

export default function QuestionsTitle({ isQuestionsLoading }: QuestionsTitleProps) {
  const { specs, isSpecsLoading, isSpecsError } = useSpecializations();
  const { specFilter } = useSpecFilter();
  const { skills, isSkillsLoading, isSkillsError } = useSkills(specFilter);

  const sidebarButtonRef = useRef(null);
  const questionsDrawerRef = useRef(null);
  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  const currentSpec = specs?.find((spec) => spec.id === Number(specFilter));
  const specTitle = currentSpec?.title;

  useEffect(() => {
    if (isQuestionsLoading) return;

    document.title = specTitle ? `Вопросы ${specTitle}` : "Вопросы не найдены";
  }, [specTitle, isQuestionsLoading]);

  return (
    <div className={styles.contentTitle}>
      {isQuestionsLoading ? (
        <Skeleton
          width={300}
          height={24}
        />
      ) : (
        <h1 className={styles.mainTitle}>Вопросы {specTitle}</h1>
      )}
      {skills && (
        <>
          <button
            ref={sidebarButtonRef}
            className={styles.filtersButton}
            onClick={toggleSidebar}
          >
            <img
              src={filtersBtn}
              alt="Кнопка с фильтрами"
            />
          </button>
          <Drawer
            drawerRef={questionsDrawerRef}
            isOpen={isSidebarOpen}
            className={`${styles.drawerSidebar} ${isSidebarOpen ? styles.drawerOpen : ""}`}
          >
            <button
              className={styles.closeBtn}
              onClick={closeSidebar}
            >
              <img
                src={closeBtn}
                alt="Кнопка закрытия сайдбара"
              />
            </button>
            <QuestionsSidebar
              specs={specs}
              isSpecsLoading={isSpecsLoading}
              isSpecsError={isSpecsError}
              skills={skills}
              isSkillsError={isSkillsError}
              isSkillsLoading={isSkillsLoading}
              className={styles.fixedSidebar}
            />
          </Drawer>
        </>
      )}
    </div>
  );
}
