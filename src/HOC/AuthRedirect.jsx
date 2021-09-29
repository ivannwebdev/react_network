import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

let mapStateForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{

        render(){
            if(!this.props.isAuth) return <Redirect to= '/login'/>

            return <Component {...this.props}/>
        }
    }
    let ConnectAuthRedirect = connect(mapStateForRedirect)(RedirectComponent)

    return ConnectAuthRedirect
}

