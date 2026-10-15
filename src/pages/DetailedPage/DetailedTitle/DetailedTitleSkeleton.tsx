import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import stylesDetailedTitle from "./DetailedTitle.module.css";

export default function DetailedTitleSkeleton() {
  return (
    <div className={`${stylesDetailedTitle.shadowWrapper} ${stylesDetailedTitle.titleWrapper}`}>
      <Skeleton
        width={157}
        height={157}
        borderRadius={12}
      />
      <div className={stylesDetailedTitle.titleMobileWrapper}>
        <div className={stylesDetailedTitle.titleText}>
          <Skeleton height={48} />
          <Skeleton height={80} />
        </div>
      </div>
    </div>
  );
}
