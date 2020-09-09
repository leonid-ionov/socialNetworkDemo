import s from './Users.module.css'
import avatarSmall from '../../assets/images/avatarSmall.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'


const User = ({user, ...props}) => {
    return (
        <div className={s.userBlock}>
                    <span className={s.userPhotoBtn}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ?
                                    user.photos.small :
                                    avatarSmall} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={s.followBtn}>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unfollowUser(props.name,user.id)
                                          }}
                                >Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.followUser(props.name,user.id)
                                        }}
                                >Follow</button>}
                                    </div>
                                    </span>
            <span className={s.userInfo}>
                                    <span>
                                    <div className={s.userName}>
                                    <NavLink to={'/profile/' + user.id}>
                                    {user.name}
                                    </NavLink>
                                    </div>
                                    <div className={s.userStatus}>{user.status}</div>
                                    </span>
                                    </span>
        </div>
    )
}

export default User