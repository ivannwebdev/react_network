import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input} from '../Elements/FormsControllers/FormControll'
import styles from './Login.module.css'
import { required, noGap, maxLengthCreator } from './../../Validators/validator';
import { connect } from 'react-redux';
import { login } from './../../Redux/auth-reducer';
import { Redirect } from 'react-router';
import style from './../Elements/FormsControllers/FormControll.module.css'
import {Button} from 'react-bootstrap'



const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {
    return <form onSubmit= {props.handleSubmit} className= {styles.form}>
        <div>
            <Field validate= {[required, noGap, maxLength30]} name= 'email' placeholder= 'email' component= {Input}/>
        </div>
            <div>
                <Field validate={[required, noGap, maxLength30]} type='password' name='password' placeholder='password' component={Input} />
            </div>
            <div>
            <div style={{ display: 'inline', float: 'left', fontSize: 17, fontWeight: 500, marginLeft: 105, marginRight: -80, marginTop: 13}}>
                         Remember me
                    </div>
                    <div>
                        <Field name='rememberMe' type='checkbox' component={Input} />
                    </div>
                    
            </div>
        {props.error && <div className= {style.formError}>
                {props.error}
            </div>}
        <div>
           <Button style= {{marginLeft: 110, width: 170, height: 42 }} size= 'lg' onClick= {props.handleSubmit}>Login</Button>
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
            <h1 style= {{marginLeft: 105}}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />

        </div>
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login)