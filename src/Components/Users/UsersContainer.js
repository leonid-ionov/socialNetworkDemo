import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    followUser,
    getUsersFromServer,
    setCurrentPage,
    setCurrentPortion, setPortionSize,
    unfollowUser
} from '../../Redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { compose } from 'redux'
import {
    getCurrentPage, getCurrentPortion,
    getFollowingInProgress, getIsFetching, getPageSize,
    getPortionSize, getTotalPages, getTotalPortions,
    getUsersFromState
} from '../../Redux/UsersSelectors'
import { useEvent } from '../../utils/hooks/useEvent'
import { debounce } from '../../utils/debounce/debounce'

const UsersContainer = (props) => {
    const name = 'regular',
        [screenSize, setScreenSize] = useState(window.innerWidth),
        debouncedHandleResize = debounce(() => {
            setScreenSize(window.innerWidth)
        },300)
    useEffect(() => {
        props.getUsersFromServer(name, props.currentPage, props.pageSize)
    }, [props.currentPage])

    useEvent('resize',debouncedHandleResize)

    useEffect(() => {
        if (screenSize <= 430) {
            props.setPortionSize(name, 5)
        } else {
            props.setPortionSize(name, 10)
        }
    })

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
            isFetching: getIsFetching(state, props),
            pageSize: getPageSize(state, props)
        }
    },
    ACObject = {setCurrentPage, getUsersFromServer, followUser, unfollowUser, setCurrentPortion, setPortionSize}

export default compose(
    connect(mapStateToProps, ACObject)
)(UsersContainer)