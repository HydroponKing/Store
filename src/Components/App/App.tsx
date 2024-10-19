import style from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MainPage from "../../Pages/MainPage/MainPage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store/Store"
import { getProductsThunk } from "../../Store/Slices/Products/service"

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return <div className={style.app}>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    <Footer />
  </div>
}

export default App
