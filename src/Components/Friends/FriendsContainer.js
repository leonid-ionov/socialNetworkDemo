import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { unfollowUser, getUsersFromServer,setCurrentPage} from '../../Redux/usersReducer'
import Friends from './Friends'
import Preloader from '../Common/Preloader/Preloader'
import { compose } from 'redux'
import {
    getCurrentPage, getCurrentPortion,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize, getTotalPages, getTotalPortions,
    getUsersFromState
} from '../../Redux/UsersSelectors'
import Users from '../Users/Users'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const FriendsContainer = (props) => {
    const name = 'friends'
    useEffect(() => {
        props.getUsersFromServer(name,props.currentPage, props.pageSize, true)
    }, [props.currentPage,props.followingInProgress])
    const onPageChanged = (page) => {
        props.setCurrentPage(name,page)
    }

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <Friends
                name ={name}
                currentPortion={props.currentPortion}
                portionSize={props.portionSize}
                portions={props.portions}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                friends={props.friends}
                followingInProgress={props.followingInProgress}
                unfollowUser={props.unfollowUser}
                pages={props.pages}
            />
        </div>
    )
}

const mapStateToProps = (state,props) => {
        return {
            currentPortion: getCurrentPortion(state,props),
            portionSize: getPortionSize(state,props),
            portions: getTotalPortions(state,props),
            friends: getUsersFromState(state,props),
            pageSize: getPageSize(state,props),
            currentPage: getCurrentPage(state,props),
            followingInProgress: getFollowingInProgress(state,props),
            pages: getTotalPages(state,props),
            isFetching:getIsFetching(state,props)
        }
    },
    ACObject = {setCurrentPage, getUsersFromServer, unfollowUser}

export default compose(
    connect(mapStateToProps, ACObject),withAuthRedirect
)(FriendsContainer)