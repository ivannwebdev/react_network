import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../../Validators/validator'
import { Textarea } from '../../../Elements/FormsControllers/FormControll';
import { noGap } from './../../../../Validators/validator';

const maxLength15 = maxLengthCreator(15)

const Form  = (props) =>{

    return <form onSubmit= {props.handleSubmit}>
        <div>
            <Field validate= {[required, maxLength15, noGap]} component= {Textarea} name= 'addPost' placeholder='Post text' wrap='hard'/>
        </div>

        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostForm = reduxForm({form: 'addPost'})(Form)
export default AddPostForm