import itemCardPlaceholder from "@/shared/assets/images/itemCardPlaceholder.png";
import filtersBtn from "@/shared/assets/icons/filtersBtn.svg";
import type { RefObject } from "react";
import styles from "./DetailedTitle.module.css";
import type { Question } from "@/entities/question/model/questionTypes.ts";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";

interface DetailedTitleProps {
  item: Collection | Question | null;
  detailedSidebarButtonRef: RefObject<HTMLButtonElement | null>;
  toggleSidebar: () => void;
}

export default function DetailedTitle({
  item,
  detailedSidebarButtonRef,
  toggleSidebar,
}: DetailedTitleProps) {
  return (
    <>
      <img
        className={styles.cardImg}
        src={item?.imageSrc ?? itemCardPlaceholder}
        alt={item?.title}
      />
      <div className={styles.titleMobileWrapper}>
        <div className={styles.titleText}>
          <h1 className={styles.mainTitle}>{item?.title}</h1>
          <p className={styles.description}>{item?.description}</p>
        </div>

        <button
          ref={detailedSidebarButtonRef}
          className={styles.filtersButton}
          onClick={toggleSidebar}
        >
          <img
            src={filtersBtn}
            alt="Кнопка с фильтрами"
          />
        </button>
      </div>
    </>
  );
}
