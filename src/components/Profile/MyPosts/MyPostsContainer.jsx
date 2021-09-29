import { addPostCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDiaspatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostCreator(postText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDiaspatchToProps) (MyPosts)

export default MyPostsContainer