import style from "./Product.module.css"

interface MainProps{
  products : Product[]
}
interface Product {
  title: string;
  images: string; 
  price: number;
}




export default function Product ({products} : MainProps){

  console.log(products[0]);

  return (
    <div>
      <div className={style.product}>
      {products.map((item, index) => {
        return <div key={index} className={style.card}>
          <img src={item.images} className={style.img}></img>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      })}
      </div>
    </div>
  );
}
