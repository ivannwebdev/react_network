import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


export default function MyPosts(props) {

  let postElement = props.profilePage.posts.map(post => <Post id= {post.id} message= {post.message} likesCount= {post.likesCount}/>)

  let value = props.profilePage.newPostText

  let addPost = () => {
    props.addPost()
  }

  let postChange = (event) => {
    let text = event.target.value
    props.postChange(text)
  }


  return(
      <div className= {styles.wrapper}>
        <div className= {styles.item}>My Posts</div>
        <div className={styles.addPostWrapper}>
        
          <div className= {styles.postTextWrap}>
            <textarea value= {value} onChange= {postChange} placeholder= 'Post text' wrap= 'hard' className= {styles.postText}></textarea>
          </div>

          <div className= {styles.buttonWrap}>
            <button className= {styles.button} onClick= {addPost}>Add post</button>
          </div>

        </div>
        <div className={styles.posts}>
          {postElement}
        </div>

      </div>
    )
}