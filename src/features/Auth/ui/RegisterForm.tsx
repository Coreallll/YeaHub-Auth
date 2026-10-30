import { useAppDispatch } from "@/shared/lib/hooks.ts";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/features/Auth/api/authApi.ts";
import type { RegisterFormValues } from "@/features/Auth/model/types.ts";
import { useForm, useWatch } from "react-hook-form";
import { tokenStorage } from "@/shared/lib/authToken.ts";
import { loggedIn } from "@/features/Auth/model/authSlice.ts";
import { useEffect, useState } from "react";
import styles from "@/features/Auth/ui/Form.module.css";
import eyeSlash from "@/shared/assets/icons/eyeSlash.svg";

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [registerUser, { isLoading }] = useRegisterMutation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    trigger,
    control,
    formState: { errors, touchedFields },
  } = useForm<RegisterFormValues>({ mode: "onBlur", reValidateMode: "onChange" });

  const password = useWatch({ control, name: "password" });

  useEffect(() => {
    if (touchedFields.confirmPassword) {
      void trigger("confirmPassword");
    }
  }, [password, touchedFields.confirmPassword, trigger]);

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const { username, email, password } = data;
      const response = await registerUser({ username, email, password }).unwrap();

      tokenStorage.set(response.access_token);
      dispatch(loggedIn());
      navigate("/");
    } catch (error) {
      console.error("Ошибка регистрации:", error);

      setError("root.server", {
        message: "Не удалось зарегистрироваться. Попробуйте ещё раз.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <label className={styles.field}>
        <span>Никнейм</span>
        <input
          type="text"
          placeholder="Введите никнейм"
          className={`${styles.input} ${errors.username ? styles.error : ""}`}
          {...register("username", { required: "Введите никнейм" })}
        />
        {errors.username && <p className={styles.fieldError}>{errors.username.message}</p>}
      </label>
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
        {errors.email && <p className={styles.fieldError}>{errors.email.message}</p>}
      </label>
      <label className={styles.field}>
        <span>Пароль</span>
        <div className={styles.inputWrapper}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Введите пароль"
            className={`${styles.input} ${errors.password ? styles.error : ""}`}
            {...register("password", {
              required: "Введите пароль",
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
                message:
                  "Пароль должен содержать заглавные и строчные буквы, цифры и специальные символы",
              },
            })}
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
        {errors.password && <p className={styles.fieldError}>{errors.password.message}</p>}
      </label>
      <label className={styles.field}>
        <span>Подтвердите пароль</span>
        <div className={styles.inputWrapper}>
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Введите пароль"
            className={`${styles.input} ${errors.confirmPassword ? styles.error : ""}`}
            {...register("confirmPassword", {
              required: "Подтвердите пароль",
              validate: (value) => value === getValues("password") || "Пароли не совпадают",
            })}
          />
          <button
            type="button"
            className={styles.visibilityButton}
            onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
          >
            <img
              src={eyeSlash}
              alt=""
            />
          </button>
        </div>
        {errors.confirmPassword && (
          <p className={styles.fieldError}>{errors.confirmPassword.message}</p>
        )}
      </label>

      <div className={styles.checkboxList}>
        <p className={styles.checkboxDescription}>
          Проставив галочку («✔») и нажимая «Зарегистрироваться»:
        </p>
        <label className={`${styles.checkboxField} ${errors.acceptPrivacy ? styles.error : ""}`}>
          <input
            type="checkbox"
            {...register("acceptPrivacy", {
              required: "Необходимо согласиться с обработкой данных",
            })}
          />
          Даю согласие на обработку ПД, в соответствии с Политикой в отношении ПД
        </label>

        <label className={`${styles.checkboxField} ${errors.acceptOffer ? styles.error : ""}`}>
          <input
            type="checkbox"
            {...register("acceptOffer", {
              required: "Необходимо принять условия оферты",
            })}
          />
          Я ознакомился с договором-офертой
        </label>

        <label className={styles.checkboxField}>
          <input
            type="checkbox"
            {...register("marketingConsent")}
          />
          Согласен на получение рекламных рассылок
        </label>

        {errors.acceptPrivacy && (
          <p className={styles.fieldError}>{errors.acceptPrivacy.message}</p>
        )}
        {errors.acceptOffer && <p className={styles.fieldError}>{errors.acceptOffer.message}</p>}
        {errors.root?.server && <p className={styles.fieldError}>{errors.root.server.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitBtn}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
