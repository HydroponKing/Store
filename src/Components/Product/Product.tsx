import style from "./Product.module.css"
import { TProduct } from "../../Services/Types/Components";

interface MainProps{
  products : TProduct[]
}

export default function Product ({products} : MainProps){

  return (
    <div className={style.wrapper}>
      <div className={style.product}>
      {products.map((item, index) => {
        return <div key={index} className={style.card}>
          <img src={item.images} className={style.img}></img>
          <p className={style.tittle}>{item.title}</p>
          <p className={style.price}>{item.price} $</p>
        </div>
      })}
      </div>
    </div>
  );
}
