import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks.ts";
import { useLogoutMutation } from "@/features/Auth/api/authApi.ts";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedOut } from "@/features/Auth/model/authSlice.ts";
import { baseApi } from "@/shared/api/baseApi.ts";

export default function HeaderAuthButton({ className = "" }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error("Ошибка серверного выхода", error);
    } finally {
      tokenStorage.remove();
      dispatch(loggedOut());
      dispatch(baseApi.util.resetApiState());
    }
  };

  return (
    <div className={`${styles.authButtons} ${className}`}>
      {isAuthenticated ? (
        <>
          <Link
            to={"/"}
            className={styles.authLink}
            onClick={handleLogout}
          >
            Выход
          </Link>
          <Link
            to={"/profile"}
            className={styles.authLinkFilled}
          >
            Профиль
          </Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
