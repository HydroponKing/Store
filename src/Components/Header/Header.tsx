import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={style.header}>
      <Link to='/' className={style.logo}/>
      <div className={style.container}>
        <Link to='/login' className={style.btn}>Login</Link>
        
      </div>
    </div>
  )
}
