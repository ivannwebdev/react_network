import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

export default function DialogsItem(props) {
    let path = '/dialogs/' + props.id
    return(
        <div className={styles.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}