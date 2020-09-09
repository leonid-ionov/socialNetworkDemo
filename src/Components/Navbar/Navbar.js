import React from 'react'
import s from './Navbar.module.css'
import { Nav } from 'react-bootstrap'
import NavbarItem from './NavbarItem'

const Navbar = (props) => {
    return (
            <Nav variant="pills" className={s.nav}  >
                <NavbarItem to={'/profile'} linkName={'Profile'}/>
                <NavbarItem to={'/dialogs'} linkName={'Messages'}/>
                <NavbarItem to={'/users'} linkName={'Users'}/>
                <NavbarItem to={'/friends'} linkName={'Friends'}/>
                <NavbarItem to={'/news'} linkName={'News'}/>
                <NavbarItem to={'/music'} linkName={'Music'}/>
                <NavbarItem to={'/settings'} linkName={'Settings'}/>
            </Nav>
    )
}

export default Navbar