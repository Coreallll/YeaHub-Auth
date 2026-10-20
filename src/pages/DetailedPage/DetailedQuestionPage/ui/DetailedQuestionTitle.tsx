import { useRef } from "react";
import closeBtn from "@/shared/assets/icons/closeBtn.svg";
import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import { useSidebarState } from "@/shared/hooks/useSidebarState.ts";
import type { Question } from "@/entities/question/model/questionTypes.ts";
import useClickOutside from "@/shared/lib/useClickOutside.ts";
import { DetailedQuestionPageSidebar } from "@/pages/DetailedPage/DetailedQuestionPage/DetailedQuestionPageSidebar";
import { Drawer } from "@/shared/ui/Drawer";
import { DetailedTitle } from "@/pages/DetailedPage";

interface DetailedQuestionTitleProps {
  question: Question;
}

export default function DetailedQuestionTitle({ question }: DetailedQuestionTitleProps) {
  const detailedDrawerRef = useRef(null);
  const detailedSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  useClickOutside(detailedDrawerRef, closeSidebar, detailedSidebarButtonRef);

  return (
    <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
      <DetailedTitle
        item={question}
        detailedSidebarButtonRef={detailedSidebarButtonRef}
        toggleSidebar={toggleSidebar}
      />
      <Drawer
        drawerRef={detailedDrawerRef}
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

        <DetailedQuestionPageSidebar
          question={question}
          className={styles.fixedSidebar}
        />
      </Drawer>
    </div>
  );
}
