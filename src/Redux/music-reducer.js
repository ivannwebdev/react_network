let initialState = {
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

const musicReducer = (state= initialState, action) => {
    return {...state}
}

export default musicReducer