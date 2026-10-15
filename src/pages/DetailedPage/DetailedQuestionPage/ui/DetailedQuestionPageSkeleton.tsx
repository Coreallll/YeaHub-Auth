import styles from "@/pages/DetailedPage/DetailedPage.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import stylesTitle from "@/pages/DetailedPage/DetailedTitle/DetailedTitle.module.css";
import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import DetailedSidebarSkeleton from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarSkeleton.tsx";

export default function DetailedQuestionPageSkeleton() {
  return (
    <div className="wrapper">
      <div className={styles.returnBtn}>
        <Skeleton
          width={75}
          height={22}
        />
      </div>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
            <Skeleton
              width={160}
              height={160}
              borderRadius={12}
            />
            <div className={stylesTitle.titleText}>
              <Skeleton height={28} />
              <Skeleton height={80} />
            </div>
          </div>
          <div className={styles.shadowWrapper}>
            <div className={styles.buttonsFlex}>
              <Skeleton
                width={166}
                height={48}
              />
              <Skeleton
                width={166}
                height={48}
              />
            </div>
          </div>
          <div className={`${styles.shadowWrapper} ${styles.flexColumn}`}>
            <Skeleton height={24} />
            <Skeleton height={100} />
          </div>
          <div className={`${styles.shadowWrapper} ${styles.flexColumn}`}>
            <Skeleton height={24} />
            <Skeleton height={300} />
            <div className={styles.alignCenter}>
              <Skeleton
                width={100}
                height={24}
              />
            </div>
          </div>
        </div>
        <aside className={stylesSidebar.sidebar}>
          <DetailedSidebarSkeleton />
        </aside>
      </div>
    </div>
  );
}
