import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router';

export default function Profile(props) {

    if (!props.isAuth) return <Redirect to='/login' />

    return(
        <div className ={styles.content}>
          <ProfileInfo profile= {props.profile} status= {props.status} updateStatus= {props.updateStatus}/>
          <MyPostsContainer/>
          
      </div>
    )
}