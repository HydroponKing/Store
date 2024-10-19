import style from "./Modal.module.css";


export default function Modal({ active, setActive }) {
  return (
    <div
      className={`${style.modal} ${active ? style.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
}
