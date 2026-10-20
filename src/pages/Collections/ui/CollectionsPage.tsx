import { usePagination } from "@/shared/lib/usePagination.ts";
import { useCollections } from "@/pages/Collections/model/useCollections.ts";
import CollectionTitle from "@/pages/Collections/ui/CollectionTitle.tsx";
import { CollectionsList } from "@/widgets/Collections";
import Pagination from "@/shared/ui/Pagination/ui/Pagination.tsx";
import CollectionsSidebar from "@/pages/Collections/ui/CollectionsSidebar.tsx";
import styles from "./CollectionsPage.module.css";

export default function CollectionsPage() {
  const { collectionsData, isCollectionsLoading, isError, totalCollectionsPages } =
    useCollections();

  const { currentPage, handleNextPage, handlePrevPage, handlePageClick } = usePagination();

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <CollectionTitle isCollectionsLoading={isCollectionsLoading} />
        <hr className={styles.divider} />
        <CollectionsList
          collectionsData={collectionsData}
          isCollectionsLoading={isCollectionsLoading}
          isError={isError}
        />
        <Pagination
          isCollectionsLoading={isCollectionsLoading}
          currentPage={currentPage}
          totalPages={totalCollectionsPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      </div>
      <CollectionsSidebar />
    </div>
  );
}
