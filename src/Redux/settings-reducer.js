const SET_COLOR = 'SET_COLOR'

const initialState = {
    darkMode: false
}

export const settingsReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return {
                ...state,
                darkMode: action.payload
            }
            
    
        default:
            return {...state} 
    }
}

export const darkModeCreator = (payload) => ({type: SET_COLOR, payload})