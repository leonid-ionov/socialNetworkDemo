import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const NavbarItem = (props) => {
    return (
        <Nav.Item className={s.item}>
            <Nav.Link  as={NavLink} to={props.to} activeClassName={s.active}>{props.linkName}</Nav.Link>
        </Nav.Item>
    )
}

export default NavbarItem