import { useAppDispatch } from "@/shared/lib/hooks.ts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { type LoginFormValues, useLoginMutation } from "@/features/Auth/api/authApi.ts";
import { type SubmitHandler, useForm } from "react-hook-form";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedIn } from "@/features/Auth/model/authSlice.ts";
import styles from "./Form.module.css";
import { useState } from "react";
import eyeSlash from "@/shared/assets/icons/eyeSlash.svg";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const routeState = location.state as { from?: string } | null;

  const from =
    typeof routeState?.from === "string" &&
    routeState.from.startsWith("/") &&
    !routeState.from.startsWith("//")
      ? routeState.from
      : "/";

  const [login, { isLoading, error }] = useLoginMutation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      const response = await login({
        username: values.email,
        password: values.password,
      }).unwrap();

      tokenStorage.set(response.access_token);
      dispatch(loggedIn());
      navigate(from, { replace: true });
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
        <div className={styles.inputWrapper}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Введите пароль"
            className={`${styles.input} ${errors.password ? styles.error : ""}`}
            {...register("password", { required: "Введите пароль" })}
          />
          <button
            type="button"
            className={styles.visibilityButton}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            <img
              src={eyeSlash}
              alt=""
            />
          </button>
        </div>
        {errors.password && <span className={styles.fieldError}>{errors.password.message}</span>}
        <Link
          className={styles.forgetPassLink}
          to={"/auth/forgot-password"}
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
