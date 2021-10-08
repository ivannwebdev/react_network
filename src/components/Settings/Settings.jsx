import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { darkModeCreator } from '../../Redux/settings-reducer'
import CheckInput from '../Elements/Checkbox/Checkbox'
import styles from './settings.module.css'


const Settings = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />
    
    return(
        <div className= {props.darkMode? styles.darkWrapper : styles.lightWrapper}>
            <h3 style= {{marginLeft: 500}}>Settings</h3>
            <div>
                <span onClick={() => props.darkModeCreator(true)}>
                    <CheckInput />
                </span>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        darkMode: state.settings.darkMode
    }
}

export default connect(mapStateToProps, {darkModeCreator}) (Settings)