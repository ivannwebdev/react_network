import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import  AddPostForm from './Form/AddPostForm';


export default function MyPosts(props) {

  let postElement = props.profilePage.posts.map(post => <Post id= {post.id} message= {post.message} likesCount= {post.likesCount}/>)

  const onSubmit = (formData) => {
    props.addPost(formData.addPost)
    formData.addPost = ''

  }


  return(
      <div className= {styles.wrapper}>
        <div className= {styles.item}>My Posts</div>
        <div className={styles.addPostWrapper}>
        
          <AddPostForm onSubmit= {onSubmit}/>

        </div>
        <div className={styles.posts}>
          {postElement}
        </div>

      </div>
    )
}