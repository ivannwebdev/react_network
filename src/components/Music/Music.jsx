import React from "react"
import { Redirect } from "react-router"
import styles from "./Music.module.css"
import { connect } from 'react-redux';


 function Music(props) {

	if (!props.isAuth) return <Redirect to='/login' />

	let trecks = props.state.music.songs.map((treck, i) => (
		<li className={styles.song}>
			{i + 1}. &#9836; {treck.song}
		</li>
	))

	let singers = props.state.music.singers.map((singer) => (
		<li className={styles.item}> {singer.singer} </li>
	))

	return (
		<div className={props.darkMode? styles.darkWrapper :styles.wrapper}>
			<div className={styles.trecks}>
				<ul>{trecks}</ul>
			</div>
			<div className={styles.singers}>
				<ul>{singers}</ul>
			</div>
		</div>
	)
}

export default Music
