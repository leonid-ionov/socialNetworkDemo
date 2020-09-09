import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form'
import SendTextForm from '../../Common/SendTextForm/SendTextForm'

const MyPosts = (props) => {
    let myPostsElement = props.myPosts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = (data) => props.addPost(data.textArea),
        AddPostForm = reduxForm({form:'myPost'})(SendTextForm)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={addPost}
                             btnText={'Add post'} placeholderText={'Your new post'}/>
            </div>
            <div className={s.posts}>
                {myPostsElement}
            </div>
        </div>
    )
}

export default MyPosts