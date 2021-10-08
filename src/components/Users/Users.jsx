import React, { useState } from 'react'
import styles from './Users.module.css'
import photo from './../../photos/image.jpg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Paginator from '../Elements/Paginator/Paginator'

let Users = (props) => {

    return <div className= {props.darkMode? styles.darkWrapper: styles.lightWrapper}>
            <div className= {styles.pages}>
                <Paginator pageSize= {props.pageSize} totalItemsCount= {props.totalItemsCount} currentPage= {props.currentPage} onChange= {props.onPageChange} portionSize= {props.portionSize}/>
            </div>
            <div>
                {props.users.map(el => <div key= {el.id + Math.random()}>
                    <NavLink to= {`/profile/ ${el.id}`}><img className={styles.image} src={el.photos.small != null ? el.photos.small : photo} /></NavLink>
                        <div className= {styles.wrapper}>
                            <span>{el.name}</span>
                        
                            <span>id {el.id}</span>
                        </div>
                        
                    <div>
                        {el.followed ? 
                            <button className= {props.darkMode? styles.unfollowDark :styles.unfollowLight}  disabled= {props.followingProgress.some(id => id === el.id)} onClick={() => {
                            props.unFollow(el)
                        }
                    }>unfollow
                    </button> 
                            : <button className= {props.darkMode? styles.followDark :styles.followLight} disabled={props.followingProgress.some(id => id === el.id)} onClick= {() => {
                                props.follow(el)
                }
                    }>follow</button>}
                        </div>
                    </div>
                )}
            </div>
        </div>
}

const mapStateToProps = (state) => ({
    darkMode: state.settings.darkMode
})

export default connect(mapStateToProps, null)(Users)