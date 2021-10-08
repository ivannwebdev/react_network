import React from 'react';
import { connect } from 'react-redux';
import styles from './Post.module.css'


 function Post(props) {

    return(
        <div className={props.darkMode? styles.darkWrapper :styles.wrapper}>
           <img className= {styles.avatar} src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg"/>
          <div className ={styles.item}>{props.message}</div>
          <span className= {styles.count}>{props.likesCount} likes</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    darkMode: state.settings.darkMode
})

export default connect(mapStateToProps, null)(Post)