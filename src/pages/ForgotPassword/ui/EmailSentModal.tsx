import { Modal } from "@/shared/ui/Modal";
import styles from "./ForgotPasswordPage.module.css";
import EmailModal from "@/shared/assets/icons/emailModal.svg?react";

interface EmailSentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailSentModal({ isOpen, onClose }: EmailSentModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.forgetPasswordModal}
    >
      <EmailModal />
      <h2>Мы отправили письмо с инструкциями</h2>
      <p>Если письмо не пришло, проверьте папку «Спам» или попробуйте отправить запрос ещё раз.</p>

      <button
        type="button"
        className={styles.resendBtn}
      >
        Отправить повторно
      </button>
    </Modal>
  );
}
