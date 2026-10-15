import searchIcon from "@/shared/assets/icons/searchIcon.svg";
import styles from "@/features/Filters/ui/Filters.module.css";
import type { ChangeEvent } from "react";
import useSearch from "@/shared/lib/useSearch.ts";

export default function Search() {
  const { searchDraft, setSearchDraft } = useSearch();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchDraft(event.target.value);
  }

  return (
    <div className={styles.searchWrap}>
      <img
        src={searchIcon}
        alt="Поиск"
        className={styles.searchIcon}
      />
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        placeholder="Введите запрос..."
        value={searchDraft}
        onChange={handleSearch}
      />
    </div>
  );
}
