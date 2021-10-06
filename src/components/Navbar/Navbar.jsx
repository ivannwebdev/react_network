import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from'./Navbar.module.css'

function Navbar(props) {
  console.log(props)
    return(
      <nav className={styles.nav}>
        <div className= {styles.item}>
          <NavLink className= {styles.navlink} to='/profile' activeClassName= {styles.activeLink}>Profile</NavLink>
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
          <NavLink className= {props?.location?.pathname === '/users' ? styles.users : '' } to= '/users' activeClassName= {styles.activeLink}>Users</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default withRouter(Navbar)