import logo from "@/shared/assets/images/footer-logo.svg";
import styles from "./Footer.module.css";
import figma from "@/shared/assets/icons/socialsIcons/figma.svg";
import telegram from "@/shared/assets/icons/socialsIcons/telegram.svg";
import youtube from "@/shared/assets/icons/socialsIcons/youtube.svg";
import tiktok from "@/shared/assets/icons/socialsIcons/tiktok.svg";
import github from "@/shared/assets/icons/socialsIcons/github.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <img
          className={styles.footerLogo}
          src={logo}
          alt="Логотип YeaHub"
        />
        <span className={styles.slogan}>Выбери, каким будет IT завтра, вместе с нами</span>
        <p className={styles.descr}>
          YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
          исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
          ознакомления в Figma.
        </p>
        <div className={styles.bottomContent}>
          <div className={styles.copyright}>
            <a href="">© 2024 YeaHub</a>
            <a href="">Документы</a>
          </div>
          <div className={styles.socials}>
            <span className={styles.socialsDescr}>Ищите нас и в других соцсетях @yeahub_it</span>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a
                  href=""
                  className={styles.socialLink}
                >
                  <img
                    src={figma}
                    alt="Figma"
                  />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  href=""
                  className={styles.socialLink}
                >
                  <img
                    src={telegram}
                    alt="Telegram"
                  />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  href=""
                  className={styles.socialLink}
                >
                  <img
                    src={youtube}
                    alt="Youtube"
                  />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  href=""
                  className={styles.socialLink}
                >
                  <img
                    src={tiktok}
                    alt="TikTok"
                  />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  href=""
                  className={styles.socialLink}
                >
                  <img
                    src={github}
                    alt="GitHub"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
