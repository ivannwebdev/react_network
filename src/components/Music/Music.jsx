import React from "react"
import styles from "./Music.module.css"


export default function Music(props) {
	let trecks = props.state.music.songs.map((treck, i) => (
		<li className={styles.song}>
			{i + 1}. &#9836; {treck.song}
		</li>
	))

	let singers = props.state.music.singers.map((singer) => (
		<li className={styles.item}> {singer.singer} </li>
	))

	return (
		<div className={styles.wrapper}>
			<div className={styles.trecks}>
				<ul>{trecks}</ul>
			</div>
			<div className={styles.singers}>
				<ul>{singers}</ul>
			</div>
		</div>
	)
}
