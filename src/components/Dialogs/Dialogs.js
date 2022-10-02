import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )


    let messagesElements = state.messages.map(
        m => <Message message={m.message}/>
    )

    let newMessageBody = state.newMessageBody


    let newMessageElement = React.createRef()

    let onSendMessageClick = () => {

      props.sendMessage()

       // props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={s.messages}>


                <div>{messagesElements}</div>

                <div>
                    <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        ref={newMessageElement}
                        placeholder='zalupka'>   </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add post</button>
                    </div>

                </div>


            </div>


        </div>
    )


}

export default Dialogs;