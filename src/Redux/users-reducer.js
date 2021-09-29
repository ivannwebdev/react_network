import { API } from "../Api/api"

const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_COUNT = 'SET_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

let initialState = {
    users:[],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        
        case SET_USERS: 
            return {
                ...state,
                users:  [...action.users]
            }
        
        case SET_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_COUNT: 
            return {
                ...state, totalUsersCount: action.totalCount
            }

        case TOGGLE_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING:
            return {
                ...state, followingProgress:
                 action.isFetching? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id !== action.userId)
            }

        default: return state
    }

}


export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage= (currentPage) => ({ type: SET_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({type: SET_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
                                                                                   
    dispatch(toggleIsFetching(true))
    API.getUsers(pageSize, currentPage).then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
    )
}

export const follow = (user) => (dispatch) => {
    dispatch(toggleIsFollowing(true, user.id))
    API.follow(user.id).then(response => {
        if (response.resultCode === 0) {
            user.followed = true
        }
        dispatch(toggleIsFollowing(false, user.id))
    })
}

export const unFollow = (user) => (dispatch) => {
    dispatch(toggleIsFollowing(true, user.id))
    API.unFollow(user.id).then(response => {
        if (response.resultCode === 0) {
            user.followed = false
        }
        dispatch(toggleIsFollowing(false, user.id))
    })
}

export default usersReducer