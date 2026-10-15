import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import { FilterSectionSkeleton } from "@/features/Filters";

export default function SidebarSkeleton() {
  return (
    <>
      <Skeleton
        height={48}
        borderRadius={68}
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={200}
        borderRadiusFilter={12}
        showAllBtn
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={100}
        borderRadiusFilter={12}
        showAllBtn
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={35}
        borderRadiusFilter={12}
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={35}
        borderRadiusFilter={12}
        showAllBtn
      />
    </>
  );
}
