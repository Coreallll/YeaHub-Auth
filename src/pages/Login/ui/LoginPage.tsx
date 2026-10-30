import { LoginForm } from "@/features/Auth";
import { FormBottomBlock } from "@/shared/ui/FormBottomBlock";
import { FormContent } from "@/shared/ui/FormContent";
import { useAppSelector } from "@/shared/lib/hooks.ts";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuthenticated, isAuthChecked } = useAppSelector((state) => state.auth);
  if (!isAuthChecked) {
    return <div>Проверяем авторизацию...</div>;
  }
  if (isAuthenticated) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }
  return (
    <>
      <FormContent>
        <h1>Вход в личный кабинет</h1>
        <LoginForm />
      </FormContent>
      <FormBottomBlock
        text="Нет аккаунта?"
        linkText="Зарегистрироваться"
        to="/auth/register"
      />
    </>
  );
}
