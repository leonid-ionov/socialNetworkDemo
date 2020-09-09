import { getAuthenticationData } from './authReducer'

const SET_INITIALIZED = 'app/SET_INITIALIZED'

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
        type: SET_INITIALIZED
    }),

    initializeApp = () => async (dispatch) => {
        let promise = dispatch(getAuthenticationData())
        await Promise.all([promise])
        dispatch(initializedSuccess())
    }


export default appReducer