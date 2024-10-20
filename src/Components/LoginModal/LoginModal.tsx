import { Link } from "react-router-dom";
import style from "./LoginModal.module.css";
import type { LoginModal, ModalProps } from "../../Services/Types/Components";

export default function LoginModal({ setActive }:ModalProps) {
  return (
    <div>
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
        <Link to='/register' onClick={()=> setActive(false)}>
        <p className={style.loginLink}>Don't you have an account? Register here!</p>
        </Link>
      </div>
    </div>
  );
}
