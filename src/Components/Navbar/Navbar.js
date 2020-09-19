import React from 'react'
import s from './Navbar.module.css'
import { Image, Nav, NavDropdown } from 'react-bootstrap'
import NavbarItem from './NavbarItem'

const Navbar = (props) => {
    return (
        <Nav variant="pills" className={s.nav}>
            <Image src={'https://i.pinimg.com/originals/3e/2b/1b/3e2b1b5712ffe85a54cdf214d280ce10.jpg'}/>
            <div className={s.menu}>
                <NavDropdown className={s.dropdown} title="Menu" id="nav-dropdown">
                    <NavDropdown.Item><NavbarItem to={'/profile'} linkName={'Profile'}/></NavDropdown.Item>
                    <NavDropdown.Item><NavbarItem to={'/dialogs'} linkName={'Messages'}/></NavDropdown.Item>
                    <NavDropdown.Item><NavbarItem to={'/users'} linkName={'Users'}/></NavDropdown.Item>
                    <NavDropdown.Item><NavbarItem to={'/friends'} linkName={'Friends'}/></NavDropdown.Item>
                    <NavDropdown.Item> <NavbarItem to={'/news'} linkName={'News'}/></NavDropdown.Item>
                    <NavDropdown.Item><NavbarItem to={'/music'} linkName={'Music'}/></NavDropdown.Item>
                    <NavDropdown.Item><NavbarItem to={'/settings'} linkName={'Settings'}/></NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className={s.common}>
                <Nav.Item>
                    <NavbarItem to={'/profile'} linkName={'Profile'}/>
                    <NavbarItem to={'/dialogs'} linkName={'Messages'}/>
                    <NavbarItem to={'/users'} linkName={'Users'}/>
                    <NavbarItem to={'/friends'} linkName={'Friends'}/>
                    <NavbarItem to={'/news'} linkName={'News'}/>
                    <NavbarItem to={'/music'} linkName={'Music'}/>
                    <NavbarItem to={'/settings'} linkName={'Settings'}/>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Navbar