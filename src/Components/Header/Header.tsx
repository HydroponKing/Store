import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header({ onLoginClick }) {
  return (
    <div className={style.header}>
      <Link to='/' className={style.logo}/>
      <div className={style.container}>
        <button className={style.btn} onClick={onLoginClick}>Login</button> 
      </div>
    </div>
  )
}
