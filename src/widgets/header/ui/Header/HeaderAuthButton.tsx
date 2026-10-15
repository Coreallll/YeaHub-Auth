import styles from "./Header.module.css";

export default function HeaderAuthButton({className =""}) {
  return (
    <div className={`${styles.authButtons} ${className}`}>
      <a href="#" className={styles.authLink}>Вход</a>
      <a href="#" className={styles.authLinkFilled}>Регистрация</a>
    </div>
  )
}