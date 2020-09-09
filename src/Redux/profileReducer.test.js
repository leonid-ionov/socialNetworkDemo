import profileReducer, { addPost, deletePost } from './profileReducer'

 const state = {
     myPosts: [
         {id: 1, message: 'Hi, fuck you!', likesCount: 15},
         {id: 2, message: 'It\'s my first time', likesCount: 20},
         {id: 3, message: 'I\'m so tired', likesCount: 1200},
         {id: 4, message: 'HOLY SHIT!!', likesCount: 1},
         {id: 5, message: 'You son of the bitch!', likesCount: 20}
     ]
 }
test('length of new post', () => {
    let action = addPost('new post'),
        newState = profileReducer(state, action)
    expect (newState.myPosts.length).toBe(6)})

test('message should be new post', () => {
    let action = addPost('new post'),
        newState = profileReducer(state, action)
    expect (newState.myPosts[5].message).toBe('new post')
})

test('after deleting post length of array should be decrement', () => {
    let action = deletePost(1),
        newState = profileReducer(state, action)
    expect (newState.myPosts.length).toBe(4)
})
test('after deleting length shouldn\'t be decrement if id incorrect', () => {
    let action = deletePost(25),
        newState = profileReducer(state, action)
    expect (newState.myPosts.length).toBe(5)
})