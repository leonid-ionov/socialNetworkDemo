let initialState = {
    dialogs: [
        {id: 1, name: 'Agares'},
        {id: 2, name: 'Abigor'},
        {id: 3, name: 'Barbatos'},
        {id: 4, name: 'Bifrons'},
        {id: 5, name: 'Velzevul'},
        {id: 6, name: 'Asmoday'},
        {id: 7, name: 'Baal'}
    ],

    messages: [
        {id: 1, message: 'Duis aute irure dolor?'},
        {id: 2, message: 'Et harum quidem rerum facilis est et expedita distinctio.'},
        {id: 3, message: 'Ut enim ad minima veniam!'}
    ]
}
const  ADD_MESSAGE = 'dialog/ADD-MESSAGE',
    dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_MESSAGE :
                let newMessage = {
                    id: 4,
                    message: action.text
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            default :
                return state

        }
    }

export const addMessage = (text) => ({type: ADD_MESSAGE,text})

export default dialogsReducer