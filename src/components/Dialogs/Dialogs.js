import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )


    let messagesElements = props.messages.map(
        m => <Message message={m.message}/>
    )


    let newMessageElement=React.createRef()

    let addMessage=()=>{
        let text=newMessageElement.current.value
        alert(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={s.messages}>


                {messagesElements}


            </div>
            <div>
                <textarea ref={newMessageElement}>   </textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>


        </div>
    )


}

export default Dialogs;