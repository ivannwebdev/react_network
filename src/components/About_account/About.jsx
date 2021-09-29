import React from 'react'
import styles from './About.module.css'

const About = (props) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.about_me}>
                <h2>Coo! So now its save and refresh automaticly</h2>
                <h1>Acount description</h1>
                Hello. I would like to tell you abot me.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut alias natus laudantium maxime, soluta iusto error magni libero ipsam nobis maiores necessitatibus asperiores dolorum? Event!
            </div>
        </div>
    )
}

export default About