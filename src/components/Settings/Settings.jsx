import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const Settings = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return(
        <div>
            <h1>Your settings</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, null) (Settings)