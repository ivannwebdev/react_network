import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
    return <form onSubmit= {props.handleSubmit}>
        <Field name= 'messageForm' placeholder='Enter message' component= 'textarea'/>
        <button> Send</button>
    </form>
}

const AddMessageForm = reduxForm({form: 'messageForm'})(Form)

export default AddMessageForm