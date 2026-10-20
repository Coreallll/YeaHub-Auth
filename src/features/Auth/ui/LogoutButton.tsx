import { useAppDispatch } from "@/shared/lib/hooks.ts";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@/features/Auth/api/authApi.ts";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedOut } from "@/features/Auth/model/authSlice.ts";
import { baseApi } from "@/shared/api/baseApi.ts";

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error("Ошибка серверного выхода", error);
    } finally {
      tokenStorage.remove();
      dispatch(loggedOut());
      dispatch(baseApi.util.resetApiState());
      navigate("/login", { replace: true });
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
    >
      Выход
    </button>
  );
}
