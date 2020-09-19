import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import avatarSmall from '../../assets/images/avatarSmall.jpg'
import { Button, Col, Image} from 'react-bootstrap'

const Header = (props) => {
    return (
        <header className={s.header}>
            {props.isAuth ?
                <div className={s.loginBlock}>
                        <div className={s.Login}>{props.login}</div>
                        <Button size="sm" onClick={props.deleteLoginData}>Log-out</Button>
                        <img className={s.Avatar} src={props.avatar ? props.avatar : avatarSmall}/>
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