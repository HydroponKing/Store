import style from "./LoginModal.module.css";
import type { LoginModal, ModalProps } from "../../Services/Types/Components";

export default function LoginModal({ setActive }:ModalProps) {
  return (
    <div>
      <div className={style.loginForm}>
        <h2 className={style.loginHeading}>Cart</h2>
        <button type="submit" className={style.submitButton}  onClick={()=> setActive(false)}>
        buy!
        </button>
      </div>
    </div>
  );
}
