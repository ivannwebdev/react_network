import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap';
import { maxLengthCreator, noGap } from '../../../Validators/validator';

const max50 = maxLengthCreator(50)

const Form = (props) => {
    return <form onSubmit= {props.handleSubmit}>
        <Field validate= {[noGap]} name= 'messageForm' placeholder='Enter message' component= 'textarea'/>
        <Button onClick= {props.handleSubmit} style= {{width: 110, height: 36, backgroundColor: 'dimgray'}} > Send</Button>
    </form>
}

const AddMessageForm = reduxForm({form: 'messageForm'})(Form)

export default AddMessageForm