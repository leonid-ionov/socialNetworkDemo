import React, { useEffect } from 'react'
import Profile from './Profile'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getAuthUserID, getIsAuth } from '../../Redux/authSelectors'
import { getUserProfileFromState, getUserStatusFromState } from '../../Redux/ProfileSelector'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const ProfileContainer = (props) => {
    useEffect(() => {
        let userID = props.match.params.userID
        if (!userID) {
            userID = props.authID
        }
        props.getUserProfile(userID)
        props.getUserStatus(userID)
    },[props.match.params.userID,props.isAuth])

    return <Profile {...props}
                    profile={props.profile}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}/>
}

const mapStateToProps = (state) => ({
        authID: getAuthUserID(state),
        isAuth: getIsAuth(state),
        profile: getUserProfileFromState(state),
        status: getUserStatusFromState(state)
    }),
    AC = {getUserProfile, getUserStatus, updateUserStatus}

export default compose(
    connect(mapStateToProps, AC),
    withRouter,withAuthRedirect
)(ProfileContainer)