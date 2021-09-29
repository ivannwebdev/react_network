const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState ={
    dialogsData: [
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Olga' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Victor' },
        {id: 5, name: 'Glorya'}
    ],
    dialogsMessages: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'what about bottle of beer tonight?' },
        { id: 4, message: 'Where is my money?' }
    ]
}

const dialogsReducer = (state= initialState, action) => {

    switch(action.type){

        case ADD_MESSAGE:
            let message = action.message
            if (message === '') return {...state}

            return {
                ...state,
                dialogsMessages: [...state.dialogsMessages, { id: 5, message: message} ]
            }
            
       default: return state
    }
}

export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message })

export default dialogsReducer