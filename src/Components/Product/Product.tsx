import { Link } from "react-router-dom";
import style from "./Product.module.css"

interface MainProps{
  products : any[]
}



export default function Product ({products} : MainProps){

  console.log(products[0]);

  return (
    <div>
      <Link to="/" className={style.product} />
      <div>
      {products.map((item, index) => {
        return <div key={index}>
          {item.title}
        </div>
      })}
      </div>
    </div>
  );
}
