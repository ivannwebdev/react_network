import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return(
        <header className ={styles.header}>
        <img src ='http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'/>
            {props.isAuth ? <div className={styles.login}>{props.login} <button onClick = {props.logout}>logout</button></div>
        : <NavLink to= '/login'><div className= {styles.login}>
            Login
            </div>
        </NavLink>}
        </header>
    )
}