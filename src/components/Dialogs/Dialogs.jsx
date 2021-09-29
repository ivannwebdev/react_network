import React from "react"
import styles from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import AddMessageForm from "./Form/AddMassageForm"
import Message from "./Message/Message"


export default function Dialogs(props) {

	let dialogsElement = props.dialogs.dialogsData.map(data => (
		<DialogsItem id={data.id} name={data.name} />
	))

	let messageElement = props.dialogs.dialogsMessages.map(mes => (
		<Message id={mes.id} message={mes.message} />
	))

	const onSubmit = (formData) => {
		props.addMessage(formData.messageForm)
		formData.messageForm = ''

	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.dialogs_items}>
				{dialogsElement}
			</div>
			<div className={styles.dialogs_messages}>
				{messageElement}
			</div>
			<AddMessageForm onSubmit= {onSubmit}/>
		</div>
	)

		

	
}
