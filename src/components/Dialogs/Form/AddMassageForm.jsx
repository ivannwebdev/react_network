import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap';

const Form = (props) => {
    return <form onSubmit= {props.handleSubmit}>
        <Field name= 'messageForm' placeholder='Enter message' component= 'textarea'/>
        <Button onClick= {props.handleSubmit} style= {{width: 128, height: 45, backgroundColor: 'darkcyan'}} size= 'lg'> Send</Button>
    </form>
}

const AddMessageForm = reduxForm({form: 'messageForm'})(Form)

export default AddMessageForm