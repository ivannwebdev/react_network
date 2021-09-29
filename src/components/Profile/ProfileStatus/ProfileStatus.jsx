import React from 'react'
import StatusForm from './Form/StatusForm'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state= {
        editMode: false,
        stutus: this.props.status
    }

    EditModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    EditModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.stutus)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.status !== this.state.status) {
            this.setState({
                stutus: prevState.status
            })
        }
    }

    onSubmit = (formData) => {
        this.setState({
            stutus: formData.statusForm
        })
    }

    
    render(){return <div className= {styles.wrapper}>
        {!this.state.editMode ? 
            <div onDoubleClick={this.EditModeOn}>Status: <span className={styles.status}>{this.state.status}</span> </div>
            : <StatusForm value= {this.state.stutus} onSubmit= {this.onSubmit}/>
        }
    </div>}
}

export default ProfileStatus