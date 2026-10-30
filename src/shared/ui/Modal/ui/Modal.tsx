import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Modal.module.css";
import CloseModal from "@/shared/assets/icons/closeModal.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string | undefined;
}

export function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${className}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.content}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          <CloseModal />
        </button>
        {children}
      </div>
    </dialog>
  );
}
