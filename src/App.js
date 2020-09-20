import React, { Suspense, useEffect } from 'react'
import './App.css'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import { Route } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import { connect } from 'react-redux'
import { initializeApp } from './Redux/appReducer'
import Preloader from './Components/Common/Preloader/Preloader'
import ProfileContainer from './Components/Profile/ProfileContainer'
import Navbar from './Components/Navbar/Navbar'

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer')),
    LoginContainer = React.lazy(() => import('./Components/Login/LoginContainer')),
    SettingsContainer = React.lazy(() => import('./Components/Settings/SettingsContainer')),
    UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer')),
    FriendsContainer = React.lazy(() => import('./Components/Friends/FriendsContainer')),

    App = (props) => {
        useEffect(() => {
            props.initializeApp()
        }, [props.initialized])
        if (!props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className={'app-wrapper-nav'}><Navbar/></div>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <section>
                            <Route path={'/login/'} render={() => <LoginContainer/>}/>
                            <Route path={'/settings'} render={() => <SettingsContainer/>}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer reducerName={'usersPage'}/>}/>
                            <Route path={'/friends/'} render={() => <FriendsContainer reducerName={'friendsPage'}/>}/>
                        </section>
                    </Suspense>
                    <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                </div>
            </div>
        )
    }

const mapStateToProps = (state) => ({
        initialized: state.app.initialized
    }),
    AC = {initializeApp}

export default connect(mapStateToProps, AC)(App)
