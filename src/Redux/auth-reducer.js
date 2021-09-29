import { stopSubmit } from "redux-form"
import { authApi } from "../Api/api"

const SET_USER = 'SET_USER'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                ...action.data
            }
            
    
        default: return {...state}
    }
}

export const setUser = (id, email, login, isAuth) => ({
    type: SET_USER,
    data: {
        id,
        email,
        login,
        isAuth
    }

})

export const auth = () => (dispatch) => {
    authApi.me().then(
        response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data
                dispatch(setUser(id, email, login, true))
            }
        }
    )
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe).then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(auth())
            } else{
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            }
        }
    )
}

export const logout = () => (dispatch) => {
    authApi.logout().then(response => {
        if (response.data.resultCode === 0){
            dispatch(setUser(null, null, null, false))
        }
    })
}


export default authReducer