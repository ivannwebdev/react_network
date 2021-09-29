import React from 'react'
import styles from './Users.module.css'
import photo from './../../photos/photo.png'
import { NavLink } from 'react-router-dom'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for(let i = 1; i<=pagesCount; i++){
        pages.push(i)
    }

    return <div>
            <div className= {styles.pages}>
                {pages.map(el => {
                    return <span onClick={() => { props.onPageChange(el)}} className={el === props.currentPage ? styles.active : ''}>{el}</span>
                })}
            </div>
            <div>
                {props.users.map(el => <div key= {el.id + Math.random()}>
                    <NavLink to= {`/profile/ ${el.id}`}><img className={styles.image} src={el.photos.small != null ? el.photos.small : photo} /></NavLink>
                        <span className= {styles.wrapper}>
                            <span>{el.name}</span>
                            <span>{el.surname}</span>,
                            <span>{'el.location.country'}</span>
                        </span>
                    <div>
                        {el.followed ? 
                        <button disabled= {props.followingProgress.some(id => id === el.id)} onClick={() => {
                            props.unFollow(el)
                        }
                    }>Unfollow
                    </button> 
                            : <button disabled={props.followingProgress.some(id => id === el.id)} onClick= {() => {
                                props.follow(el)
                }
                    }>Follow</button>}
                        </div>
                    </div>
                )}
            </div>
        </div>
}

export default Users