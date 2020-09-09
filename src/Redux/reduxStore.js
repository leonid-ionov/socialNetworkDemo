import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducerCreator from './usersReducer'
import authenticationReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

const reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducerCreator('regular'),
        authentication: authenticationReducer,
        app: appReducer,
        friendsPage: usersReducerCreator('friends'),

        form: formReducer
    }),

    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,

    store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
/*    store = createStore(reducers, applyMiddleware(thunkMiddleware))*/
window.__store = store

export default store