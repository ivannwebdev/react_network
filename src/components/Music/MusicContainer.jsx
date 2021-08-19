import Music from './Music'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return{
        state: state
    }
}

const MusicContainer = connect(mapStateToProps, null) (Music)

export default MusicContainer