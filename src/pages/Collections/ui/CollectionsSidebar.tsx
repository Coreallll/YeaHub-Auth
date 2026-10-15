import { useSpecializations } from "@/features/Filters/model/useSpecializations.ts";
import { SidebarLayout } from "@/shared/ui/Sidebar/SidebarLayout.tsx";
import Search from "@/shared/ui/Search/Search.tsx";
import { FilterAccess, FilterSpecializations } from "@/features/Filters";
import { SidebarSkeleton } from "@/shared/ui/Sidebar";

interface CollectionsSidebarProps {
  className?: string | undefined;
}

export default function CollectionsSidebar({ className = "" }: CollectionsSidebarProps) {
  const { specs, isSpecsLoading, isSpecsError } = useSpecializations();

  return (
    <SidebarLayout className={className}>
      {isSpecsError ? (
        <p>Произошла ошибка при загрузке фильтров</p>
      ) : isSpecsLoading ? (
        <SidebarSkeleton />
      ) : (
        <>
          <Search />
          <FilterSpecializations specs={specs} />
          <FilterAccess />
        </>
      )}
    </SidebarLayout>
  );
}
