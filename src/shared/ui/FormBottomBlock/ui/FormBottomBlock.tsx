import { Link } from "react-router-dom";
import styles from "./FormBottomBlock.module.css";

interface FormBottomBlockProps {
  text: string;
  linkText: string;
  to: string;
}

export function FormBottomBlock({ text, linkText, to }: FormBottomBlockProps) {
  return (
    <div className={styles.formBottomBlock}>
      <span>{text}</span>
      <Link
        className={styles.link}
        to={to}
      >
        {linkText}
      </Link>
    </div>
  );
}
