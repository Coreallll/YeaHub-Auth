import styles from "./AuthPromo.module.css";
import Logo from "@/shared/assets/images/authLogo.svg?react";
import CheckIcon from "@/shared/assets/icons/checkCircle.svg?react";

export default function AuthPromo() {
  return (
    <div className={styles.promo}>
      <div className={styles.logo}>
        <Logo />
        <span>YeaHub объединяет IT-специалистов</span>
      </div>
      <div className={styles.advantages}>
        <h3>Стань частью сообщества YeaHub и получи:</h3>
        <ul>
          <li>
            <CheckIcon />
            Пошаговый план обучения
          </li>
          <li>
            <CheckIcon />
            Карьерный рост
          </li>
          <li>
            <CheckIcon />
            Большое сообщество специалистов
          </li>
          <li>
            <CheckIcon />
            Обучение с ментором
          </li>
          <li>
            <CheckIcon />
            Возможность прохождения стажировки
          </li>
        </ul>
      </div>
    </div>
  );
}
