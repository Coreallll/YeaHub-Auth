import styles from "@/entities/collection/ui/CollectionCard.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";

export default function CollectionsListSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={styles.cardWrapper}
        >
          <Skeleton
            width={157}
            height={157}
          />
          <div className={styles.cardContent}>
            <ul className={styles.keywordsList}>
              <Skeleton
                count={3}
                width={80}
                height={25}
                borderRadius={30}
              />
            </ul>
            <h2 className={styles.cardTitle}>
              <Skeleton
                width={300}
                height={21}
              />
            </h2>
            <div className={styles.cardLinks}>
              <Skeleton
                width={130}
                height={21}
              />
              <Skeleton
                width={130}
                height={21}
              />
            </div>
            <ul className={styles.specList}>
              <Skeleton
                count={2}
                width={150}
                height={21}
              />
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
