import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Header(props) {
    return(
        <header className ={styles.header}>
        <img src ='http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'/>
            {props.isAuth ? <div className={styles.login}>{props.login} <Button style= {{backgroundColor: "darkcyan", width: 145, height: 42}} size= 'lg' onClick = {props.logout}>Logout</Button></div>
        : <NavLink to= '/login'><div className= {styles.login}>
            Login
            </div>
        </NavLink>}
        </header>
    )
}