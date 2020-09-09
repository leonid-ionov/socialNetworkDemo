import { profileAPIComponent } from '../API/API'
import { stopSubmit } from 'redux-form'

let initialState = {
    myPosts: [
        {id: 1, message: 'Nemo enim ipsam voluptatem.', likesCount: 15},
        {id: 2, message: 'Quis autem vel eum?!', likesCount: 20},
        {id: 3, message: 'Lorem ipsum dolor!', likesCount: 1200},
        {id: 4, message: 'Excepteur sint occaecat cupidatat.', likesCount: 1},
        {id: 5, message: 'Qui in ea voluptate?', likesCount: 20}
    ],
    profile: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: ''
}
const ADD_POST = 'profile/ADD_POST',
    DELETE_POST = 'profile/DELETE_POST',
    SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE',
    SET_USER_STATUS = 'profile/SET_USER_STATUS',

    profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST :
                let newPost = {
                    id: 6,
                    message: action.text,
                    likesCount: 0
                }
                return {
                    ...state,
                    myPosts: [...state.myPosts, newPost]
                }
            case SET_USERS_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
            case SET_USER_STATUS:
                return {
                    ...state,
                    status: action.status
                }
            case DELETE_POST:
                return {
                    ...state,
                    myPosts: state.myPosts.filter(p => p.id !== action.postID)
                }
            default :
                return state
        }
    }

export const addPost = (text) => ({type: ADD_POST, text}),
    deletePost = (postID) => ({type: DELETE_POST, postID}),
    setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile}),
    setUserStatus = (status) => ({type: SET_USER_STATUS, status}),

    getUserProfile = (userID) => async (dispatch) => {
        const profile = await profileAPIComponent.getUserProfile(userID)
        dispatch(setUsersProfile(profile))
    },
    getUserStatus = (userID) => async (dispatch) => {
        const status = await profileAPIComponent.getUserStatus(userID)
        dispatch(setUserStatus(status))
    },
    updateUserStatus = (status) => async (dispatch) => {
        const response = await profileAPIComponent.updateUserStatus(status)
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }, putProfileSettings = (form) => async (dispatch, getState) => {
        const userId = getState().authentication.id,
            response = await profileAPIComponent.putUserProfile(form)
        if (response.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else if (response.resultCode === 1) {
            if (response.messages[0].includes('Contacts')) {
                dispatch(stopSubmit('settings', {selectContact: response.messages}))
            } else {
                dispatch(stopSubmit('settings', {_error: response.messages}))
            }
            return Promise.reject(response.messages)
        }
    }, uploadPhoto = (photo) => async (dispatch) => {
        const formData = new FormData()
        formData.append('image', photo)
        await profileAPIComponent.postUserPhoto(formData)
    }

export default profileReducer