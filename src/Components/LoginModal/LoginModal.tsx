import style from "./LoginModal.module.css";

export default function LoginModal() {
  return (
    <div>
      <div className={style.loginForm}>
        <h2 className={style.loginHeading}>Log in</h2>
        <div className={style.formGroup}>
          <input
            className={style.loginInput}
            placeholder="Электронная почта"
            type="mail"
            id="username"
            name="username"
          />
        </div>
        <div className={style.formGroup}>
          <input
            className={style.loginInput}
            placeholder="Пароль"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Войти
        </button>
        <p className={style.loginLink}>Don't you have an account? Register here!</p>
      </div>
    </div>
  );
}
