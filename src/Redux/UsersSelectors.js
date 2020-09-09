import { createSelector } from 'reselect'

export const getUsersFromState = (state,props) => {
        return state[props.reducerName].users
    },
    getPageSize = (state,props) => {
        return state[props.reducerName].pageSize
    },
    getTotalUsersCount = (state,props) => {
        return state[props.reducerName].totalCount
    },
    getCurrentPage = (state, props) => {
        return state[props.reducerName].currentPage
    },
    getFollowingInProgress = (state,props) => {
        return state[props.reducerName].followingInProgress
    },
    getTotalPages = createSelector([getTotalUsersCount, getPageSize],
        (totalCount, pageSize) => {
            let pagesCount = Math.ceil(totalCount / pageSize),
                pages = []
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
            return pages
        }),
    getPortionSize = (state,props) => {
        return state[props.reducerName].portionSize
    },
    getCurrentPortion = (state,props) => {
        return state[props.reducerName].currentPortion
    },
    getTotalPortions = createSelector([getTotalPages, getPortionSize],
        (pages, portionSize) => {
            return Math.ceil(pages.length / portionSize)
        }),
    getIsFetching = (state,props) => {
        return state[props.reducerName].isFetching
    }
