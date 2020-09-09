import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    followUser,
    getUsersFromServer,
    setCurrentPage,
    setCurrentPortion,
    unfollowUser
} from '../../Redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { compose } from 'redux'
import {
    getCurrentPage, getCurrentPortion,
    getFollowingInProgress, getIsFetching,
    getPortionSize, getTotalPages, getTotalPortions,
    getUsersFromState
} from '../../Redux/UsersSelectors'

const UsersContainer = (props) => {
    const name = 'regular'
    useEffect(() => {
        props.getUsersFromServer(name, props.currentPage, props.pageSize)
    }, [props.currentPage])

    const onPageChanged = (page, portion) => {
        props.setCurrentPage(name, page)
        props.setCurrentPortion(name, portion)
    }

    return <div>
        {props.isFetching ? <Preloader/> : null}
        <Users
            name={name}
            currentPortion={props.currentPortion}
            portionSize={props.portionSize}
            portions={props.portions}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            users={props.users}
            followingInProgress={props.followingInProgress}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            pages={props.pages}
        />
    </div>
}

const mapStateToProps = (state, props) => {
        return {
            currentPortion: getCurrentPortion(state, props),
            portionSize: getPortionSize(state, props),
            portions: getTotalPortions(state, props),
            users: getUsersFromState(state, props),
            currentPage: getCurrentPage(state, props),
            followingInProgress: getFollowingInProgress(state, props),
            pages: getTotalPages(state, props),
            isFetching: getIsFetching(state, props)
        }
    },
    ACObject = {setCurrentPage, getUsersFromServer, followUser, unfollowUser, setCurrentPortion}

export default compose(
    connect(mapStateToProps, ACObject)
)(UsersContainer)