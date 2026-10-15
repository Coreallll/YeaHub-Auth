import { FilterSectionSkeleton } from "@/features/Filters";

export default function DetailedSidebarSkeleton() {
  return (
    <>
      <FilterSectionSkeleton
        widthSkeletonFilter={127}
        heightSkeletonFilter={35}
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={100}
        borderRadiusFilter={12}
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={127}
        heightSkeletonFilter={20}
      />
      <FilterSectionSkeleton
        widthSkeletonFilter={127}
        heightSkeletonFilter={20}
      />
    </>
  );
}
