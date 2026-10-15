import styles from "../../DetailedPage.module.css";
import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import QuestionsSkeleton from "@/widgets/questions/ui/QuestionsSkeleton.tsx";
import PaginationSkeleton from "@/shared/ui/Pagination/PaginationSkeleton.tsx";
import DetailedSidebarSkeleton from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarSkeleton.tsx";
import DetailedTitleSkeleton from "@/pages/DetailedPage/DetailedTitle/DetailedTitleSkeleton.tsx";

export default function DetailedCollectionPageSkeleton() {
  return (
    <div className="mainWrapper">
      <div className={styles.contentWrapper}>
        <DetailedTitleSkeleton />
        <div className="mainContent">
          <QuestionsSkeleton />
          <PaginationSkeleton />
        </div>
      </div>
      <aside className={stylesSidebar.sidebar}>
        <DetailedSidebarSkeleton />
      </aside>
    </div>
  );
}
