import { useAppSelector } from "@/shared/lib/hooks.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { isAuthenticated, isAuthChecked } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuthChecked) {
    return <div>Проверяем авторизацию...</div>;
  }
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/auth/login"
        replace
        state={{ from: location.pathname + location.search + location.hash }}
      ></Navigate>
    );
  }
  return <Outlet />;
}
