import Product from "../../Components/Product/Product";
import { useSelector } from "react-redux";
//import { getProductsState } from "../../Store/Slices/Products/Index";
import { TProduct } from "../../Services/Types/Components";

export default function MainPage() {
  const products : TProduct[] = useSelector((state) => state.productSlice.products)
  return (
    <div>
      <Product products={products} />
    </div>
  );
}
