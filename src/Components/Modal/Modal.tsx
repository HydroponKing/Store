import style from "./Modal.module.css"

export default function Modal ({active, setActive}){

  return (
    <div className={`${active ? `${style.modal} ${style.active}` : "modal"}`}
    onClick={() => setActive(false)}>
        <div className={style.modal__content} onClick={e => e.stopPropagation()}>

        </div>

    </div>
  );
}


