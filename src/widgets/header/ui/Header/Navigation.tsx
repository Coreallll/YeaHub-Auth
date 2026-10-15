import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation({ className = "" }) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            База вопросов
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            Коллекции
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            Тренажер
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            className={styles.navLink}
          >
            Материалы
          </a>
        </li>
        <li>
          <a
            href="#"
            className={styles.navLink}
          >
            Навыки (hh)
          </a>
        </li>
      </ul>
    </nav>
  );
}
