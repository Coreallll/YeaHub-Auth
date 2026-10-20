import { FormBottomBlock } from "@/shared/ui/FormBottomBlock";
import { FormContent } from "@/shared/ui/FormContent";
import { RegisterForm } from "@/features/Auth";

export default function RegisterPage() {
  return (
    <>
      <FormContent>
        <h1>Регистрация</h1>
        <RegisterForm />
      </FormContent>
      <FormBottomBlock
        text="Уже есть аккаунт?"
        linkText="Войти"
        to="/auth/login"
      />
    </>
  );
}
