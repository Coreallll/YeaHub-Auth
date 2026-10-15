import { useRef } from "react";
import closeBtn from "@/shared/assets/icons/closeBtn.svg";
import stylesCollectionsPage from "@/pages/Collections/ui/CollectionsPage.module.css";
import styles from "../../DetailedPage.module.css";
import DetailedTitle from "@/pages/DetailedPage/DetailedTitle/DetailedTitle.tsx";
import DetailedCollectionPageSidebar from "./DetailedCollectionPageSidebar.tsx";
import { useSidebarState } from "@/shared/hooks/useSidebarState.ts";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import useClickOutside from "@/shared/lib/useClickOutside.ts";
import { Drawer } from "@/shared/ui/Drawer";

interface DetailedCollectionTitleProps {
  collection: Collection;
}

export default function DetailedCollectionTitle({ collection }: DetailedCollectionTitleProps) {
  const detailedDrawerRef = useRef(null);
  const detailedSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarState();

  useClickOutside(detailedDrawerRef, closeSidebar, detailedSidebarButtonRef);

  return (
    <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
      <DetailedTitle
        item={collection}
        detailedSidebarButtonRef={detailedSidebarButtonRef}
        toggleSidebar={toggleSidebar}
      />
      <Drawer
        drawerRef={detailedDrawerRef}
        isOpen={isSidebarOpen}
        className={`${stylesCollectionsPage.drawerSidebar} ${isSidebarOpen ? stylesCollectionsPage.drawerOpen : ""}`}
      >
        <button
          className={stylesCollectionsPage.closeBtn}
          onClick={closeSidebar}
        >
          <img
            src={closeBtn}
            alt="Кнопка закрытия сайдбара"
          />
        </button>

        <DetailedCollectionPageSidebar
          collection={collection}
          className={stylesCollectionsPage.fixedSidebar}
        />
      </Drawer>
    </div>
  );
}
