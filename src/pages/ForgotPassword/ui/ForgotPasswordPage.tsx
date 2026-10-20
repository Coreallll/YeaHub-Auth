import LoginForm from "@/features/Auth/ui/LoginForm.tsx";
import { FormBottomBlock } from "@/shared/ui/FormBottomBlock";
import { FormContent } from "@/shared/ui/FormContent";

export default function ForgotPasswordPage() {
  return (
    <>
      <FormContent>
        <h1>Забыли пароль?</h1>
        <p>
          Для восстановления пароля введите адрес эл.почты, на который вы регистрировались. Мы
          отправим письмо для воссталовления пароля
        </p>
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
