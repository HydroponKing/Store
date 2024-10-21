import { Link } from "react-router-dom";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
            <div className={style.loginModal}>
      <div className={style.loginForm}>
        <h2 className={style.loginHeading}>ShopName</h2>
        <div className={style.formGroup}>
          <input
            className={style.loginInput}
            placeholder="Email"
            type="mail"
            id="username"
            name="username"
          />
        </div>
        <div className={style.formGroup}>
          <input
            className={style.loginInput}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className={style.submitButton}>
        log in
        </button>
        <Link to='/register'>
        <p className={style.loginLink}>Don't you have an account? Register here!</p>
        </Link>
      </div>
    </div>
    </div>
  );
}
