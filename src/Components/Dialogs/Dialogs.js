import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import SendTextForm from '../Common/SendTextForm/SendTextForm'
import { reduxForm } from 'redux-form'

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>),

        messagesElements = props.messages.map(m => <Message message={m.message}/>)

    const sendMessage = (formData) => props.addMessage(formData.textArea),

        SendMessageForm = reduxForm({form: 'messageText'})(SendTextForm)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>{messagesElements}</div>
                <div className={s.dialogsItems}>
                    <SendMessageForm onSubmit={sendMessage}
                                       btnText={'Send'}
                                       placeholderText={'Enter your message'}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs