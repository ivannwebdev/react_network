const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState ={
    dialogsData: [
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Olga' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Victor' }
    ],
    dialogsMessages: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'what about bottle of beer tonight?' },
        { id: 4, message: 'Where is my money?' }
    ],

    newMessageText: ''
}

const dialogsReducer = (state= initialState, action) => {

    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message
            }
            

        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            if (newMessage === '') return {...state}

            return {
                ...state,
                dialogsMessages: [...state.dialogsMessages, { id: 5, message: newMessage} ],
                newMessageText: ''
            }
            
       default: return state
    }
}

export const updateMessageCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, message: text })

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export default dialogsReducer