import styles from "../../DetailedPage.module.css";
import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import { DetailedSidebarSkeleton, DetailedTitleSkeleton } from "@/pages/DetailedPage";
import { PaginationSkeleton } from "@/shared/ui/Pagination";
import { QuestionsSkeleton } from "@/widgets/Questions";

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
