import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from'./Navbar.module.css'

export default function Navbar() {
    return(
      <nav  className= {styles.nav}>
        <div className= {styles.item}>
          <NavLink to='/profile' activeClassName= {styles.activeLink}>Profile</NavLink>
        </div>
        <div className= {styles.item}>
          <NavLink to='/dialogs' activeClassName= {styles.activeLink}>Massages</NavLink>
        </div>
        <div className= {styles.item}>
          <NavLink to= '/music' activeClassName= {styles.activeLink}>You'r Music</NavLink>
        </div>
        <div className= {styles.item}>
          <NavLink to= '/about' activeClassName= {styles.activeLink}>About me</NavLink>
        </div>
        <div className= {styles.item}>
          <NavLink to= '/users' activeClassName= {styles.activeLink}>Users</NavLink>
        </div>
      </nav>
    )
}