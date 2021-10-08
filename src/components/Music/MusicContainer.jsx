import Music from './Music'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return{
        state: state,
        darkMode: state.settings.darkMode,
        isAuth: state.auth.isAuth
    }
}

const MusicContainer = connect(mapStateToProps, null) (Music)

export default MusicContainer