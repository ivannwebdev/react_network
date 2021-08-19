const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Post 1', likesCount: 10 },
        { id: 2, message: 'Post 2', likesCount: 12 },
        { id: 3, message: 'Post 3', likesCount: 5 }
    ],

    newPostText: ''
}


const profileReducer = (state= initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newText = state.newPostText

            if (newText === '') return {...state}
            return  {
                        ...state,
                        posts: [...state.posts, {id: 5, message: newText, likesCount: 0}],
                        newPostText: ''
                    }
            
        }
    

        case UPDATE_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            }
        }
        default: return state
    }
}



export const addPostCreator = () => ({ type: ADD_POST })

export const updatePostCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text })
    

export default profileReducer