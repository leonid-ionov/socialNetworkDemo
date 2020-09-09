import React from 'react'
import s from './Friends.module.css'
import Paginator from '../Common/Paginator/Paginator'
import User from '../Users/User'


const Friends = (props) => {
    console.log('render')
    return (
        <div>
            <Paginator pages={props.pages}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portions={props.portions}
                       portionSize={props.portionSize}
                       currentPortion={props.currentPortion}/>
            {
                props.friends.map(u => <User user={u}
                                             name={props.name}
                                             followingInProgress={props.followingInProgress}
                                             key={u.id}
                                             unfollowUser={props.unfollowUser}/>)
            }
        </div>
    )
}

export default Friends