import { connect } from 'react-redux'
import { addMessageCreator} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { AuthRedirect } from './../../HOC/AuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDiaspatchToProps = (dispatch) => {
    return(
        {
            addMessage: (message) => {
		        dispatch(addMessageCreator(message))
	        }
        }
    )
}

export default compose(
    connect(mapStateToProps, mapDiaspatchToProps),
    AuthRedirect
)(Dialogs)