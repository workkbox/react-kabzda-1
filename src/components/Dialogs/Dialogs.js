import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    /*
        let dialogs = [
            {id: 0, name: 'Petya'},
            {id: 1, name: 'Elisey'}
        ]

        let messages = [
            {id: 0, message: 'Privet'},
            {id: 1, message: 'Kak dela?'}
        ]


    */


    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )


    let messagesElements = props.messages.map(
        m => <Message message={m.message}/>
    )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>

            <div className={s.messages}>


                {messagesElements}


            </div>


        </div>
    )


}

export default Dialogs;