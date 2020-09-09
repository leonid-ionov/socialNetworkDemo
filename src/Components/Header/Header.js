import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import avatarSmall from '../../assets/images/avatarSmall.jpg'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/3e/2b/1b/3e2b1b5712ffe85a54cdf214d280ce10.jpg'/>
                {props.isAuth ?
                    <div className={s.loginBlock}>
                        <div className={s.Login}>{props.login}</div>
                        <button onClick={props.deleteLoginData}>Log-out</button>
                        <img className={s.Avatar} src={props.avatar ? props.avatar :avatarSmall}/>
                    </div> :
                    <div className={s.loginBlock}>
                    <NavLink to={'/login'}>
                        {'Log-in'}
                    </NavLink>
                    </div>
                }
        </header>
    )
}

export default Header