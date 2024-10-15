import Product from "../../Components/Product/Product";

interface MainProps{
  products : TProduct[]
}
interface TProduct {
  title: string;
  images: string; 
  price: number;
}


export default function MainPage({ products }: MainProps) {
  console.log(products[0]);

  return (
    <div>
      <Product products={products} />
    </div>
  );
}
