export const getUserProfileFromState = (state) => {
    return state.profilePage.profile
}, getUserStatusFromState = (state) => {
    return state.profilePage.status
}, getUserPosts = (state) => {
    return state.profilePage.myPosts
}