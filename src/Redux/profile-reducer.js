import { API, profileAPI } from "../Api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Post 1', likesCount: 10 },
        { id: 2, message: 'Post 2', likesCount: 12 },
        { id: 3, message: 'Post 3', likesCount: 5 }
    ],

    profile: '',
    status:  ''
}


const profileReducer = (state= initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let text = action.postText

            if (text === '') return {...state}

            return  {
                        ...state,
                        posts: [...state.posts, {id: 5, message: text, likesCount: 0}]
                    }
            
        }
    

        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }

        default: return {...state}
    }
}



export const addPostCreator = (postText) => ({ type: ADD_POST, postText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    API.getUserProfile(userId).then(response => dispatch(setUserProfile(response.photos.large)))
}

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => dispatch(setStatus(response.data)))
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0) dispatch(setStatus(status))
    })
} 

export default profileReducer