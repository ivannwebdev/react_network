import { combineReducers, createStore } from "redux"
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import musicReducer from './music-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    music: musicReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store