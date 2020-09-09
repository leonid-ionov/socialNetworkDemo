import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom'
const Friend = (props) => {
    let path = '/friend/' + props.id
       return (
       <div className={s.friend}>
           <img src='https://www.digitalvertigo.co.uk/forum/uploads//monthly_05_2016/post-3489-0-19929300-1462982286.jpg'/>
           <NavLink to={path}>
               {props.friend}
           </NavLink>
       </div>
    );
}

export  default Friend;