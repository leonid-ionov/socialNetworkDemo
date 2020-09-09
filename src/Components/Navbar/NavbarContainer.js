import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'

const mapStoreToProps = (state) => {
    return {
        friendsList: state.navbarPage.friendsList
    }
},
    ACObject={},

    NavbarContainer = connect(mapStoreToProps,ACObject)(Navbar)

export default NavbarContainer