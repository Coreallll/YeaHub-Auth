import { useAppDispatch } from "@/shared/lib/hooks.ts";
import { Link, useNavigate } from "react-router-dom";
import { type LoginRequest, useLoginMutation } from "@/features/Auth/api/authApi.ts";
import { useForm } from "react-hook-form";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedIn } from "@/features/Auth/model/authSlice.ts";
import styles from "./Form.module.css";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit = async (values: LoginRequest) => {
    try {
      const response = await login(values).unwrap();

      tokenStorage.set(response.access_token);
      dispatch(loggedIn());
      navigate("/");
    } catch (error) {
      console.error("Ошибка авторизации", error);
    }
  };

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
      <label className={styles.field}>
        <span>Пароль</span>
        <input
          type="password"
          placeholder="Введите пароль"
          className={`${styles.input} ${errors.password ? styles.error : ""}`}
          {...register("password", { required: "Введите пароль" })}
        />
        {errors.password && <span className={styles.fieldError}>{errors.password.message}</span>}
        <Link
          className={styles.forgetPassLink}
          to={""}
        >
          Забыли пароль?
        </Link>
      </label>
      {error && <p>Не удалось войти</p>}
      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitBtn}
      >
        Вход
      </button>
    </form>
  );
}
