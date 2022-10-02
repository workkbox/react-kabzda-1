import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


/*
    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )


    let messagesElements = state.messages.map(
        m => <Message message={m.message}/>
    )

    let newMessageBody = state.newMessageBody
*/


    let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        //let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )


}

export default DialogsContainer;