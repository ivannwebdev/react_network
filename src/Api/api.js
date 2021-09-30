import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '049902c7-e3f4-4092-bc22-227c1eb715ef' }
})


export const API = {
    getUsers (pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    unFollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    getUserProfile (userId) {

        return profileAPI.getUserProfile(userId)
        .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/ ${userId}`)
    },

    getUserStatus(userId){
        return instance.get(`profile/status/ ${userId}`)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authApi = {
    me () {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logout(){
        return instance.delete('auth/login')
    }

}
