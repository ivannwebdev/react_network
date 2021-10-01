import React from 'react'
import styles from './FormControll.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error
    return <div className={styles.form + ' ' + (isError ? styles.error : '')}>

        <div>
            <textarea className= {styles.textarea} {...input} {...props} />
        </div>
        {isError && <span>{meta.error} !</span>}
    </div>
}

export const Input = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error
    return <div className={styles.form + ' ' + (isError ? styles.error : '')}>

        <div>
            <input variant= 'contained' className= {styles.input} {...input} {...props} />
        </div>
        {isError && <span className= {styles.error}>{meta.error} !</span>}
    </div>
}



