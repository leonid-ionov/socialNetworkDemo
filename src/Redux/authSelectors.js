export const getAuthUserID = (state) => {
    return state.authentication.id
}, getIsAuth= (state) => {
    return state.authentication.isAuth
},getCaptcha = (state) => {
    return state.authentication.captcha
},getUserLogin = (state) => {
    return state.authentication.login
}, getUserAvatar = (state) => {
    return state.authentication.avatar
}