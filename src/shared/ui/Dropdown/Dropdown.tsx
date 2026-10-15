import styles from "./Dropdown.module.css";
import type {ReactNode, Ref} from "react";

interface Dropdown {
  isOpen: boolean;
  dropdownRef?: Ref<HTMLDivElement>;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Dropdown({ isOpen, dropdownRef, children, className="" }: Dropdown) {

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${className}`}>
      {children}
    </div>
  )
}