import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import DetailedSidebarTags from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarTags.tsx";
import DetailedSidebarAuthor from "@/pages/DetailedPage/DetailedSidebar/DetailedSidebarAuthor.tsx";
import { FilterSection } from "@/features/Filters";

interface DetailedCollectionSidebarProps {
  collection: Collection;
  className?: string | undefined;
}

export default function DetailedCollectionPageSidebar({
  collection,
  className = "",
}: DetailedCollectionSidebarProps) {
  return (
    <aside className={`${stylesSidebar.sidebar} ${className}`}>
      {collection.specializations.length > 0 && (
        <FilterSection
          title="Специализация"
          items={collection.specializations}
          getLabel={(spec) => spec.title}
          getValue={(spec) => spec.id}
          showAllBtn
          inactive
        />
      )}
      <FilterSection
        title="Доступ"
        inactive
        isFree={collection.isFree}
      />
      {collection.company && (
        <FilterSection
          title="Компания"
          items={[collection.company]}
          getValue={(company) => company.id}
          getLabel={(company) => company.title}
          getImageSrc={(company) => company.imageSrc}
          inactive
        />
      )}
      {collection.questionsCount > 0 && (
        <FilterSection
          title="Количество вопросов"
          inactive
          questionsCount={collection.questionsCount}
        />
      )}
      {collection.keywords && <DetailedSidebarTags item={collection} />}
      {collection.createdBy && <DetailedSidebarAuthor item={collection} />}
    </aside>
  );
}
