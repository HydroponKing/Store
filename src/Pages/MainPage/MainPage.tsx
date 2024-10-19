import Product from "../../Components/Product/Product";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsState } from "../../Store/Slices/Products/Index";
import { TProduct } from "../../Services/Types/Components";

export default function MainPage() {
  const products : TProduct[] = useSelector((state) => state.productSlice.products)
  const [modalActive, setMoadlActive] =  useState(true);

  return (
    <div>
      <Product products={products} />
      <Modal active={modalActive} setActive={setMoadlActive}/>
    </div>
  );
}
