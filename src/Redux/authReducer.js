import { authenticationAPIComponent, profileAPIComponent, securityAPIComponent } from '../API/API'
import { stopSubmit, SubmissionError } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DAT',
    SET_USER_AVATAR = 'auth/SET_USER_AVATAR',
    SET_CAPTCHA_IMG = 'auth/SET_CAPTCHA_IMG'

let initialState = {
    id: null,
    email: null,
    login: null,
    captcha: null,
    isAuth: false
}
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_USER_AVATAR:
        case SET_CAPTCHA_IMG:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userID, email, login, isAuth) => ({
        type: SET_USER_DATA,
        payload: {id: userID, email, login, isAuth}
    }), setAuthUserAvatar = (avatar) => ({
        type: SET_USER_AVATAR,
        payload: {avatar}
    }), setCaptchaImg = (captcha) => ({
        type: SET_CAPTCHA_IMG,
        payload: {captcha}
    }),


    getAuthenticationData = () => async (dispatch) => {
        let response = await authenticationAPIComponent.getAuthenticationData()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setAuthUserData(id, email, login, true))
            let profile = await profileAPIComponent.getUserProfile(id)
            dispatch(setAuthUserAvatar(profile.photos.small))
        }
    },
    postLoginData = (formData) => async (dispatch) => {
        let response = await authenticationAPIComponent.loginUser(formData)
        if (response.resultCode === 0) {
            dispatch(getAuthenticationData())
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            if (response.messages[0].includes('anti-bot')) {
                throw new Error(response.messages,'captcha')
            } else {
                throw new Error(response.messages,'errors')
            }
        }
    },
    getCaptchaUrl = () => async (dispatch) => {
        let response = await securityAPIComponent.getCaptcha()
        dispatch(setCaptchaImg(response.url))
    },
    deleteLoginData = () => async (dispatch) => {
        let response = await authenticationAPIComponent.logoutUser()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
            dispatch(setCaptchaImg(null))
        }
    }


export default authenticationReducer