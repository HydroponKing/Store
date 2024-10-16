import Product from "../../Components/Product/Product";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";


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

const [modalActive, setMoadlActive] =  useState(true);


  return (
    <div>
      <Product products={products} />
      <Modal active={modalActive} setActive={setMoadlActive}/>
    </div>
  );
}
