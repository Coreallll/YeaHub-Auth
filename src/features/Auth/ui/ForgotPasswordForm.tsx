import { type LoginRequest } from "@/features/Auth/api/authApi.ts";
import { useForm } from "react-hook-form";
import styles from "@/features/Auth/ui/Form.module.css";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <label className={styles.field}>
        <span>Электронная почта</span>
        <input
          type="email"
          placeholder="Введите электронную почту"
          className={`${styles.input} ${errors.email ? styles.error : ""}`}
          {...register("email", {
            required: "Введите электронную почту",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Введите корректный email",
            },
          })}
        />
        {errors.email && <span className={styles.fieldError}>{errors.email.message}</span>}
      </label>
      <button
        type="submit"
        className={styles.submitBtn}
      >
        Отправить
      </button>
    </form>
  );
}
