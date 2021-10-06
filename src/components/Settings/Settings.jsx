import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const Settings = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return(
        <div>
            <h3 style= {{marginLeft: 500}}>Your settings</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, null) (Settings)