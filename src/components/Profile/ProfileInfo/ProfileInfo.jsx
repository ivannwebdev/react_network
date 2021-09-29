import React from 'react';
import styles from './ProfileInfo.module.css'
import photo from './../../../photos/image.jpg'
import ProfileStatus from './../ProfileStatus/ProfileStatus';



export default function ProfileInfo(props) { 
    
    return(
        <div className= {styles.wrapper}>
          <div>
          {<img className= {styles.image} src={props.profile || photo } />}
          </div>
          <ProfileStatus status= {props.status} updateStatus= {props.updateStatus}/>
          <div className={styles.item}>
            Avatar + description
          </div>
          
      </div>
    )
}