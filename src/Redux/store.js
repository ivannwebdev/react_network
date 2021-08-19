import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Post 1', likesCount: 10 },
                { id: 2, message: 'Post 2', likesCount: 12 },
                { id: 3, message: 'Post 3', likesCount: 5 }
            ],

            newPostText: ''
        },
        dialogs: {
            dialogsData: [
                { id: 1, name: 'Jack' },
                { id: 2, name: 'Olga' },
                { id: 3, name: 'Svetlana' },
                { id: 4, name: 'Victor' }
            ],
            dialogsMessages: [
                { id: 1, message: 'Hi, how are you?' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'what about bottle of beer tonight?' },
                { id: 4, message: 'Where is my money?' }
            ],

            newMessageText: ''
        },

        music: {
            songs: [
                { song: 'About me' },
                { song: 'LaLaLa' },
                { song: 'My Heart' },
                { song: 'You' }
            ],

            singers: [
                { singer: 'McD' },
                { singer: 'Mila' },
                { singer: 'Ashly' },
                { singer: 'Jack' }
            ]

        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        alert('Change')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.dialogs = dialogsReducer (this._state.dialogs, action)
        this._callSubscriber(this._state)
    }
        


}