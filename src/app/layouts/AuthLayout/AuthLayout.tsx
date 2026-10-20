import styles from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";
import { AuthPromo } from "@/widgets/AuthPromo";

export default function AuthLayout() {
  return (
    <main className={styles.authLayout}>
      <AuthPromo />
      <div className={styles.authContent}>
        <Outlet />
      </div>
    </main>
  );
}
