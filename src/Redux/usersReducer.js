import { usersAPIComponent } from '../API/API'
import { updateObjectInArray } from '../utils/object-helper/object-helper'

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 15,
    currentPortion: 1
}

const FOLLOW = `users/FOLLOW`,
    UNFOLLOW = `users/UNFOLLOW`,
    SET_USERS = `users/SET_USERS`,
    SET_CURRENT_PAGE = `users/SET_CURRENT_PAGE`,
    SET_USERS_COUNT = `users/SET_USERS_COUNT`,
    SET_CURRENT_PORTION = `users/SET_CURRENT_PORTION`,
    TOGGLE_IS_FETCHING = `users/TOGGLE_IS_FETCHING`,
    TOGGLE_IS_FOLLOWING_PROGRESS = `users/TOGGLE_IS_FOLLOWING_PROGRESS`,

    usersReducerCreator = (usersType = '') => (state = initialState, action) => {
        if (action.name !== usersType) {
            return state
        }
        switch (action.type) {
            case FOLLOW :
                return {...state, users : updateObjectInArray(state.users, action.userID, 'id', {followed: true})}
            case UNFOLLOW:
                return {...state, users : updateObjectInArray(state.users, action.userID, 'id', {followed: false})}
            case SET_USERS:
                return {...state, users : action.users}
            case SET_CURRENT_PAGE:
                return {...state,  currentPage : action.currentPage}
            case SET_USERS_COUNT:
                return {...state, totalCount : action.totalCount}
            case SET_CURRENT_PORTION:
                return {...state, currentPortion : action.currentPortion}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching : action.isFetching}
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {...state, followingInProgress : action.isFetching ?
                        [...state.followingInProgress, action.userID] :
                        [state.followingInProgress.filter(id => id !== action.userID)]}
            default :
                return state
        }
    },
    followUnfollowFlow = async (name, dispatch, userID, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(name, true, userID))
        let data = await apiMethod(userID)
        if (data.resultCode === 0) {
            dispatch(actionCreator(name, userID))
        }
        dispatch(toggleFollowingProgress(name, false, userID))
    }
export const follow = (name, userId) => ({type: FOLLOW,name, userID: userId}),
    unfollow = (name, userId) => ({type: UNFOLLOW,name, userID: userId}),
    setUsers = (name, user) => ({type: SET_USERS,name, users: user}),
    setCurrentPage = (name, currentPage) => ({type: SET_CURRENT_PAGE,name, currentPage}),
    setUsersCount = (name, totalCount) => ({type: SET_USERS_COUNT,name, totalCount: totalCount}),
    toggleIsFetching = (name, isFetching) => ({type: TOGGLE_IS_FETCHING,name, isFetching: isFetching}),
    setCurrentPortion = (name, currentPortion) => ({type: SET_CURRENT_PORTION,name, currentPortion}),
    toggleFollowingProgress = (name, isFetching, userID) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,name,
        isFetching: isFetching,
        userID: userID
    }), getUsersFromServer = (name, currentPage, pageSize, friends) => async (dispatch) => {
        dispatch(toggleIsFetching(name, true))
        let data = await usersAPIComponent.getUsersFromServer(currentPage, pageSize, friends)
        dispatch(toggleIsFetching(name, false))
        dispatch(setUsers(name, data.items))
        dispatch(setUsersCount(name, data.totalCount))
    }, unfollowUser = (name, userID) => async (dispatch) => {
        followUnfollowFlow(name, dispatch, userID, usersAPIComponent.unfollowUser.bind(usersAPIComponent), unfollow)
    }, followUser = (name, userID) => async (dispatch) => {
        followUnfollowFlow(name, dispatch, userID, usersAPIComponent.followUser.bind(usersAPIComponent), follow)
    }

export default usersReducerCreator