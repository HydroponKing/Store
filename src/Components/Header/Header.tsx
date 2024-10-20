import style from './Header.module.css'
import { Link } from 'react-router-dom'
import type { HeaderProps } from "../../Services/Types/Components"

export default function Header({onLoginClick}:HeaderProps ) {
  return (
    <div className={style.header}>
      <Link to='/' className={style.logo}/>
      <div className={style.container}>
        <button className={style.btn} onClick={onLoginClick}>Login</button> 
      </div>
    </div>
  )
}
