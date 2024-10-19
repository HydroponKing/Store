import style from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={style.registerModal}>
      <div className={style.registerForm}>
        <h2 className={style.registerHeading}>ShopName</h2>
        <div className={style.registerGroup}>
          <input
            className={style.registerInput}
            placeholder="Email"
            type="mail"
            id="username"
            name="username"
          />
        </div>
        <div className={style.registerGroup}>
          <input
            className={style.registerInput}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={style.registerGroup}>
          <input
            className={style.registerInput}
            placeholder="Repeat password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Register
        </button>
      </div>
    </div>
  );
}
