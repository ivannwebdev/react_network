import React from "react"
import styles from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"


export default function Dialogs(props) {

	let dialogsElement = props.dialogs.dialogsData.map( data => (
		<DialogsItem id={data.id} name={data.name} />
	))

	let messageElement = props.dialogs.dialogsMessages.map( mes => (
		<Message id={mes.id} message={mes.message} />
	))

	let value = props.dialogs.newMessageText

	let addMessage = () => {
		props.addMessage()
		
	}

	

	let updateMessage = (event) => {
		let text = event.target.value
		props.updateMessage(text)
	}

	

	return (
		<div className={styles.wrapper}>
			<div className={styles.dialogs_items}>
                {dialogsElement}
            </div>
			<div className={styles.dialogs_messages}>
                {messageElement}
            </div>
			<div>
				<textarea placeholder= 'Enter message' value= {value} onChange= {updateMessage}></textarea>
				<button onClick= {addMessage}>Send</button>
			</div>
		</div>
	)
}
