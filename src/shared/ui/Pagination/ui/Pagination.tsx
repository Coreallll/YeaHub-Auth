import arrowIcon from "@/shared/assets/icons/arrowPaginationBtn.svg";
import styles from "./Pagination.module.css";
import PaginationSkeleton from "./PaginationSkeleton.tsx";
import { getPaginationItems } from "@/shared/utils/getPaginationItems.ts";

interface PaginationProps {
  isCollectionsLoading?: boolean;
  isQuestionsLoading?: boolean;
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (pageNumber: number) => void;
}

export default function Pagination({
  isCollectionsLoading,
  isQuestionsLoading,
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}: PaginationProps) {
  const paginationItems = getPaginationItems({ totalPages, currentPage });

  return isCollectionsLoading || isQuestionsLoading ? (
    <PaginationSkeleton />
  ) : totalPages > 1 ? (
    <div className={styles.pagination}>
      <button
        className={styles.arrowBtn}
        onClick={handlePrevPage}
      >
        <img
          className={styles.arrowIcon}
          src={arrowIcon}
          alt="Стрелка влево"
        />
      </button>

      {paginationItems.map((item, index) => {
        if (item === "...") {
          return <span key={`dots-${index}`}>...</span>;
        } else {
          return (
            <button
              key={item}
              className={`${styles.paginationButton} ${currentPage === item ? styles.active : ""}`}
              onClick={() => handlePageClick(Number(item))}
            >
              {item}
            </button>
          );
        }
      })}

      <button
        className={styles.arrowBtn}
        onClick={handleNextPage}
      >
        <img
          className={`${styles.arrowIcon} ${styles.arrowRight}`}
          src={arrowIcon}
          alt="Стрелка вправо"
        />
      </button>
    </div>
  ) : null;
}
