import React from 'react'
import { addPost} from '../../../Redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUserPosts } from '../../../Redux/ProfileSelector'

const mapStateToProps = (state) => {
        return {
            myPosts: getUserPosts(state)
        }
    },
    AC={addPost}

    export default compose(
        connect(mapStateToProps, AC),
        React.memo)(MyPosts)