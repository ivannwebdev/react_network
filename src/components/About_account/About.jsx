import React from 'react'
import styles from './About.module.css'

export default function About(props) {
    return(
        <div className={styles.wrapper}>
            <div className={styles.about_me}>
                <h1>Account description</h1>
                Hello. I would like to tell you abot me.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut alias natus laudantium maxime, soluta iusto error magni libero ipsam nobis maiores necessitatibus asperiores dolorum? Eveniet!
            </div>
        </div>
    )
}