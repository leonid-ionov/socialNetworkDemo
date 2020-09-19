import React from 'react'
import Paginator from '../Common/Paginator/Paginator'
import User from './User'
import s from './Users.module.css'

const Users = (props) => {
    return (
        <div>
           <Paginator pages={props.pages}
                          currentPage={props.currentPage}
                          onPageChanged={props.onPageChanged}
                          portions={props.portions}
                          portionSize={props.portionSize}
                          currentPortion={props.currentPortion}/>
            {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           name={props.name}
                                           followingInProgress={props.followingInProgress}
                                           followUser={props.followUser}
                                           unfollowUser={props.unfollowUser}/>)
            }
        </div>
    )
}

export default Users