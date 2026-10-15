import styles from "./FilterButton.module.css";
import type { ReactNode } from "react";

interface FilterButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string | undefined;
}

export default function FilterButton({ children, onClick, className = "" }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.filterButton} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
