import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function HeaderAuthButton({ className = "" }) {
  return (
    <div className={`${styles.authButtons} ${className}`}>
      <Link
        to={"auth/login"}
        className={styles.authLink}
      >
        Вход
      </Link>
      <Link
        to={"auth/register"}
        className={styles.authLinkFilled}
      >
        Регистрация
      </Link>
    </div>
  );
}
