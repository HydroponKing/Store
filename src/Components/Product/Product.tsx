import { Link } from "react-router-dom";
import style from "./Product.module.css"

export default function Product() {
  return (
    <div>
      <Link to="/" className={style.product} />
      <div>
        
      </div>
    </div>
  );
}
