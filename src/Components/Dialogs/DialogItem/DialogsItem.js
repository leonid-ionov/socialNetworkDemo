import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import avatarSmall from './../../../assets/images/avatarSmall.jpg'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <img className={s.avatar} src={avatarSmall} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem