import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Elements/FormsControllers/FormControll'
import styles from './Login.module.css'
import { required, noGap, maxLengthCreator } from './../../Validators/validator';
import { connect } from 'react-redux';
import { login } from './../../Redux/auth-reducer';
import { Redirect } from 'react-router';
import style from './../Elements/FormsControllers/FormControll.module.css'

const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {
    return <form onSubmit= {props.handleSubmit} className= {styles.form}>
        <div>
            <Field validate= {[required, noGap, maxLength30]} name= 'email' placeholder= 'login' component= {Input}/>
        </div>
        <div>
            <Field validate={[required, noGap, maxLength30]} type= 'password' name= 'password' placeholder='password' component= {Input} />
        </div>
        <div>
            <Field name= 'rememberMe' type= 'checkbox' component= {Input} /> remember me
        </div>
        {props.error && <div className= {style.formError}>
                {props.error}
            </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    if (props.isAuth) return <Redirect to= '/profile'/>


    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div className={styles.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />

        </div>
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login)