import stylesSidebar from "@/shared/ui/Sidebar/SidebarLayout.module.css";
import styles from "./DetailedSidebar.module.css";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import type { Question } from "@/entities/question/model/questionTypes.ts";

interface SidebarTagsProps {
  item: Collection | Question | null;
}

export default function DetailedSidebarTags({ item }: SidebarTagsProps) {
  return (
    <section className={stylesSidebar.section}>
      <h3 className={stylesSidebar.sectionTitle}>Ключевые слова:</h3>
      <ul className={styles.keywordList}>
        {item?.keywords.map((keyword) => (
          <li key={keyword}>
            <span className={styles.keyword}>#{keyword}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
