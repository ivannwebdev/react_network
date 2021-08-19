import React from 'react';
import styles from './ProfileInfo.module.css'

export default function ProfileInfo() {
    return(
        <div className= {styles.wrapper}>
          <div>
            <img className={styles.fon} src='https://creativo.one/lessons/les5669/01.jpg'/>
          </div>
          <div className={styles.item}>
            Ava + description
          </div>
          
      </div>
    )
}