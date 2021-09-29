import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            <Field component= 'input' name= 'statusForm'/>
        </div>
        <button>Change status</button>
    </form>
}

const StatusForm = reduxForm({form: 'statusForm'})(Form)

export default StatusForm