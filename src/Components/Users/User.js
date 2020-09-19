import s from './Users.module.css'
import avatarSmall from '../../assets/images/avatarSmall.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'


const User = ({user, ...props}) => {
    return (
        <div className={s.userBlock}>
                    <span className={s.userPhotoBtn}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <Image src={user.photos.small !== null ?
                                    user.photos.small :
                                    avatarSmall} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={s.followBtn}>
                            {user.followed
                                ? <Button size="sm" disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unfollowUser(props.name,user.id)
                                          }}
                                >Unfollow</Button> :
                                <Button size="sm" disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.followUser(props.name,user.id)
                                        }}
                                >Follow</Button>}
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