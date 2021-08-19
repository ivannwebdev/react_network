import React from 'react';
import styles from './Post.module.css'


export default function Post(props) {

    return(
        <div className={styles.wrapper}>
           <img className= {styles.avatar} src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg"/>
          <div className ={styles.item}>{props.message}</div>
          <span className= {styles.count}>{props.likesCount} likes</span>
        </div>
    )
}