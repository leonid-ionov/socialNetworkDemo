import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '7dd0dc8a-790e-4d7a-ad6a-f19b0e6ee31f'},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPIComponent = {
        getUsersFromServer(currentPage = 1, pageSize = 10, friend= null) {
            return (
                instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`).then(response => response.data)
            )
        },
        unfollowUser(userID) {
            return (
                instance.delete(`follow/${userID}`).then(response => response.data)
            )
        },
        followUser(userID) {
            return (
                instance.post(`follow/${userID}`).then(response => response.data)
            )
        }
    },

    profileAPIComponent = {
        getUserProfile(userID) {
            return (
                instance.get(`profile/${userID}`).then(response => response.data)
            )
        },
        getUserStatus(userID) {
            return (
                instance.get(`profile/status/${userID}`).then(response => response.data)
            )
        },
        updateUserStatus(status) {
            return (
                instance.put(`profile/status/`, {status: status}).then(response => response.data)
            )
        },
        putUserProfile(profileSettings) {
            return (
                instance.put(`profile/`, profileSettings).then(response => response.data)
            )
        },
        postUserPhoto(formData) {
            return (
                instance.post('profile/photo', formData)
            )
        }
    },

    authenticationAPIComponent = {
        getAuthenticationData() {
            return (
                instance.get('auth/me').then(response => response.data)
            )
        },
        loginUser(formData) {
            return (
                instance.post('auth/login', {
                    email: formData.email,
                    password: formData.password,
                    rememberMe: formData.rememberMe,
                    captcha: formData.captcha
                }).then(response => response.data)
            )
        },
        logoutUser() {
            return (
                instance.delete('auth/login').then(response => response.data)
            )
        }
    },

    securityAPIComponent = {
        getCaptcha() {
            return (
                instance.get('security/get-captcha-url').then(response => response.data)
            )
        }
    }
