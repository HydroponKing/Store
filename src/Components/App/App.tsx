import style from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MainPage from "../../Pages/MainPage/MainPage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { api } from "../../Services/Api"
import { useEffect, useState } from "react"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    api.getAllProducts()
      .then(data => setProducts(data.products))
  }, [])

  return <div className={style.app}>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage products={products}/>}/>
    </Routes>
    <Footer />
  </div>
}

export default App
