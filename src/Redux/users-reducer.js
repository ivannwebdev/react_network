const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_COUNT = 'SET_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    users:[],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state= initialState, action) => {

    switch (action.type){
        case FOLLOW:
           return {
                ...state,
                users: state.users.map (el => {
                    if (el.id === action.userId) return { ...el, isFollowed: true }
                    return el
                })
            }
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (el => {
                    if (el.id === action.userId) return { ...el, isFollowed: false }
                    return el
                })
            }
        
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

        default: return state
    }

}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId})
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage= (currentPage) => ({ type: SET_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({type: SET_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching: isFetching})

export default usersReducer