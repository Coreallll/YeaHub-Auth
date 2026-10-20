import { LoginForm } from "@/features/Auth";
import { FormBottomBlock } from "@/shared/ui/FormBottomBlock";
import { FormContent } from "@/shared/ui/FormContent";

export default function LoginPage() {
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
