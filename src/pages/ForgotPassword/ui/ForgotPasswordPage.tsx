import { FormBottomBlock } from "@/shared/ui/FormBottomBlock";
import { FormContent } from "@/shared/ui/FormContent";
import { EmailSentModal } from "@/pages/ForgotPassword/ui/EmailSentModal.tsx";
import { useState } from "react";
import ForgotPasswordForm from "@/features/Auth/ui/ForgotPasswordForm.tsx";

export default function ForgotPasswordPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FormContent>
        <h1>Забыли пароль?</h1>
        <p>
          Для восстановления пароля введите адрес эл.почты, на который вы регистрировались. Мы
          отправим письмо для воссталовления пароля
        </p>
        <ForgotPasswordForm setIsModalOpen={setIsModalOpen} />
      </FormContent>
      <FormBottomBlock
        text="Нет аккаунта?"
        linkText="Зарегистрироваться"
        to="/auth/register"
      />
      <EmailSentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
