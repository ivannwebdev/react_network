import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import styles from './About.module.css'

const About = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    return(
        <div className={styles.wrapper}>
            <div className={styles.about_me}>
                <h1>Acount description</h1>
                Hello. I would like to tell you abot me.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut alias natus laudantium maxime, soluta iusto error magni libero ipsam nobis maiores necessitatibus asperiores dolorum? Event!
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, null) (About)