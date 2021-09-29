import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from './../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { AuthRedirect } from './../../HOC/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 19024

        this.props.getStatus(userId)
        this.props.getUserProfile(userId)
        
    }

    render(){
        return(
            <Profile {...this.props} profile= {this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.authId,
        isAuth: state.auth.isAuth
    }
}

export default compose( 
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    AuthRedirect
)(ProfileContainer)

