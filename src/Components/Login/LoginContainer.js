import React from 'react'
import { connect } from 'react-redux'
import { postLoginData } from '../../Redux/authReducer'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import { getCaptcha, getIsAuth } from '../../Redux/authSelectors'

const    LoginContainer = (props) => {
        if (props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div style={{padding: 10}}>
                <h3>Log-in</h3>
                <LoginForm onSubmit={props.postLoginData} captchaImg={props.captcha}/>
            </div>
        )
    },
    mapStateToProps = (state) => ({
        isAuth: getIsAuth(state),
        captcha: getCaptcha(state)
    }),
    AC = {postLoginData}


export default connect(mapStateToProps, AC)(LoginContainer)