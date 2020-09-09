import React from 'react'
import s from './Post.module.css'
import avatarSmall from './../../../../assets/images/avatarSmall.jpg'
import likeImg from './../../../../assets/images/likeImg.png'

const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src={avatarSmall}/>
                    {props.message}
                    <div className={s.like}>
                        <img src={likeImg} />
                        <span>{props.likesCount}</span>
                    </div>
                </div>
    )
}

export default Post