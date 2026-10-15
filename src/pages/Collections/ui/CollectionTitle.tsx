import { useSidebarState } from "@/shared/hooks/useSidebarState.ts";
import { useRef } from "react";
import styles from "./CollectionsPage.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import useClickOutside from "@/shared/lib/useClickOutside.ts";
import CollectionsSidebar from "@/pages/Collections/ui/CollectionsSidebar.tsx";
import filtersBtn from "@/shared/assets/icons/filtersBtn.svg";
import closeBtn from "@/shared/assets/icons/closeBtn.svg";
import { Drawer } from "@/shared/ui/Drawer";

interface CollectionTitleProps {
  isCollectionsLoading: boolean;
}

export default function CollectionTitle({ isCollectionsLoading }: CollectionTitleProps) {
  const sidebarButtonRef = useRef<HTMLButtonElement>(null);
  const collectionsDrawerRef = useRef<HTMLDivElement | null>(null);

  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  useClickOutside(collectionsDrawerRef, closeSidebar, sidebarButtonRef);

  return (
    <div className={styles.contentTitle}>
      {isCollectionsLoading ? (
        <Skeleton
          width={300}
          height={24}
        />
      ) : (
        <h1 className={styles.mainTitle}>Коллекции</h1>
      )}
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
        drawerRef={collectionsDrawerRef}
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
        <CollectionsSidebar className={styles.fixedSidebar} />
      </Drawer>
    </div>
  );
}
