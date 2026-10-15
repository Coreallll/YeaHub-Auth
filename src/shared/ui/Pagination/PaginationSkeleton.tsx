import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import styles from "./Pagination.module.css";

export default function PaginationSkeleton() {
  return (
    <div className={styles.pagination}>
      <Skeleton
        width={28}
        height={28}
        borderRadius={8}
      />
      <Skeleton
        count={6}
        width={20}
        height={20}
      />
      <Skeleton
        width={28}
        height={28}
        borderRadius={8}
      />
    </div>
  );
}
