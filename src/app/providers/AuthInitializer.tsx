import { type ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks.ts";
import { useRefreshMutation } from "@/features/Auth/api/authApi.ts";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedIn, loggedOut } from "@/features/Auth/model/authSlice.ts";

interface AuthInitializerProps {
  children: ReactNode;
}

export default function AuthInitializer({ children }: AuthInitializerProps) {
  const dispatch = useAppDispatch();

  const isAuthChecked = useAppSelector((state) => state.auth.isAuthChecked);

  const [refresh] = useRefreshMutation();

  useEffect(() => {
    let cancelled = false;

    const initializeAuth = async () => {
      try {
        const response = await refresh().unwrap();

        if (cancelled) return;

        tokenStorage.set(response.access_token);
        dispatch(loggedIn());
      } catch (error) {
        console.error("Ошибка:", error);
        if (cancelled) return;

        tokenStorage.remove();
        dispatch(loggedOut());
      }
    };
    initializeAuth();
    return () => {
      cancelled = true;
    };
  }, [dispatch, refresh]);

  if (!isAuthChecked) {
    return <div>Проверяем авторизацию...</div>;
  }

  return <>{children}</>;
}
