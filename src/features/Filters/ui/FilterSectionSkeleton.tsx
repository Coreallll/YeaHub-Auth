import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import styles from "./Filters.module.css";

interface FilterSectionSkeletonProps {
  widthSkeletonFilter?: number;
  heightSkeletonFilter?: number;
  borderRadiusFilter?: number;
  showAllBtn?: boolean;
}

export default function FilterSectionSkeleton({
  widthSkeletonFilter,
  heightSkeletonFilter,
  borderRadiusFilter,
  showAllBtn,
}: FilterSectionSkeletonProps) {
  return (
    <section className={styles.section}>
      <Skeleton
        width={100}
        height={16}
      />
      <ul className={styles.filtersList}>
        <Skeleton
          count={2}
          width={widthSkeletonFilter}
          height={heightSkeletonFilter ?? 42}
          borderRadius={borderRadiusFilter}
        />
      </ul>
      {showAllBtn && (
        <Skeleton
          width={100}
          height={20}
          borderRadius={12}
        />
      )}
    </section>
  );
}
