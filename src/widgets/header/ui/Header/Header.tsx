import logo from "@/shared/assets/images/logo.svg";
import LogoText from "@/shared/assets/images/logoText.svg?react";
import styles from "./Header.module.css";
import Navigation from "./Navigation.tsx";
import ArrowIcon from "@/shared/assets/icons/arrow.svg?react";
import BurgerIcon from "@/shared/assets/icons/burger.svg?react";
import { useRef, useState } from "react";
import Dropdown from "@/shared/ui/Dropdown/Dropdown.tsx";
import HeaderAuthButton from "./HeaderAuthButton.tsx";
import useClickOutside from "@/shared/lib/useClickOutside.ts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  const buttonMenuRef = useRef<HTMLButtonElement | null>(null);
  const dropdownAuthRef = useRef<HTMLDivElement | null>(null);
  const buttonAuthRef = useRef<HTMLButtonElement | null>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }
  function closeAuth() {
    setIsAuthOpen(false);
  }

  useClickOutside(dropdownMenuRef, closeMenu, buttonMenuRef);
  useClickOutside(dropdownAuthRef, closeAuth, buttonAuthRef);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLogoWrap}>
              <img
                className={styles.headerLogo}
                src={logo}
                alt="Логотип Yeahub"
              />
              <LogoText className={styles.headerLogoText} />
            </div>
            <Navigation />
            <div className={styles.navWrapMobile}>
              <button
                ref={buttonMenuRef}
                type="button"
                className={`${styles.navWrapMobileBtn} ${isMenuOpen ? styles.opened : ""}`}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Подготовка
                <ArrowIcon className={styles.iconArrowDown} />
              </button>
              <Dropdown
                dropdownRef={dropdownMenuRef}
                isOpen={isMenuOpen}
                onClose={closeMenu}
              >
                <Navigation className={styles.mobileNavigation} />
              </Dropdown>
            </div>
          </div>
          <HeaderAuthButton />
          <div className={styles.authWrapMobile}>
            <button
              ref={buttonAuthRef}
              className={`${styles.burgerBtn} ${isAuthOpen ? styles.opened : ""}`}
              onClick={() => setIsAuthOpen((prev) => !prev)}
            >
              <BurgerIcon className={styles.iconBurger} />
            </button>
            <Dropdown
              dropdownRef={dropdownAuthRef}
              isOpen={isAuthOpen}
              onClose={closeAuth}
              className={styles.authDropdown ?? ""}
            >
              <HeaderAuthButton className={styles.mobileAuthButtons} />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
