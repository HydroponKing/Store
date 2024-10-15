import Product from "../../Components/Product/Product";

interface MainProps {
  products: any[];
}

export default function MainPage({ products }: MainProps) {
  console.log(products[0]);

  return (
    <div>
      <Product products={products} />
    </div>
  );
}
