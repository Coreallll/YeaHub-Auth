import type { PropsWithChildren } from "react";
import styles from "./FormContent.module.css";

export function FormContent({ children }: PropsWithChildren) {
  return <div className={styles.formContent}>{children}</div>;
}
