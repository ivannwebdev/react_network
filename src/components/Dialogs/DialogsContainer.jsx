import { connect } from 'react-redux'
import { addMessageCreator, updateMessageCreator } from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDiaspatchToProps = (dispatch) => {
    return(
        {
            addMessage: () => {
		        dispatch(addMessageCreator())
	        },

            updateMessage: (text) => {
                dispatch(updateMessageCreator(text))
            }
        }
    )
}

const DialogsContainer = connect(mapStateToProps, mapDiaspatchToProps) (Dialogs)

export default DialogsContainer