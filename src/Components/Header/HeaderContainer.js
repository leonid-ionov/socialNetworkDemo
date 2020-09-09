import React from 'react'
import Header from './Header'
import { deleteLoginData } from '../../Redux/authReducer'
import { connect } from 'react-redux'
import { getIsAuth, getUserAvatar, getUserLogin } from '../../Redux/authSelectors'


function HeaderContainer(props) {
    return <Header {...props}/>
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getUserLogin(state),
    avatar: getUserAvatar(state)
    }),
    AC = {deleteLoginData}

export default connect(mapStateToProps, AC)(HeaderContainer)