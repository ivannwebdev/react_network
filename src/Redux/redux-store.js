import { applyMiddleware, combineReducers, createStore } from "redux"
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import musicReducer from './music-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    music: musicReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store