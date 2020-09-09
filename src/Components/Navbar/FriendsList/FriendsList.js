import React from 'react';
import s from './FriendsList.module.css';
import Friend from './Friend/Friend'

const FriendsList = (props) => {
    let friendsList = props.friendsList.map(f => <Friend friend={f.friend} id={f.id}/>)
    return (
       <div>
           <div className={s.heading}>
               Friends
           </div>
           <div className={s.friendList}>
               {friendsList}
           </div>
       </div>
    );
}

export  default FriendsList;