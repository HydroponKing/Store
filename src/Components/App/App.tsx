import style from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MainPage from "../../Pages/MainPage/MainPage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store/Store"
import { getProductsThunk } from "../../Store/Slices/Products/service"
import Modal from "../Modal/Modal"

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const handleLodinClick = () => {
    setModalActive(true);
  }

  return <div className={style.app}>
    <Header onLoginClick={handleLodinClick}/>
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    <Footer />
    <Modal active={modalActive} setActive={setModalActive}/>
  </div>
}

export default App
