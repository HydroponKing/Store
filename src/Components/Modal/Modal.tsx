import style from "./Modal.module.css";
import { ModalProps } from "../../Services/Types/Components";




export default function Modal({ active, setActive, children }: ModalProps): JSX.Element {
  return (
    <div
      className={`${style.modal} ${active ? style.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
