import React from 'react'
import s from './../Dialogs.module.css'
import avatarSmall from './../../../assets/images/avatarSmall.jpg'

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={avatarSmall}/>
            <text>{props.message}</text>
        </div>
    )
}

export default Message