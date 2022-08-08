import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.activ}>
            {/*<NavLink to={"/dialogs/" + props.id}> {props.name}  </NavLink>*/}
            <NavLink to={path}> {props.name}  </NavLink>

        </div>
    )
}

const Message = (props) => {


    return (
        <div>{props.message}</div>
    )

}

const Dialogs = (props) => {


    let dialogsData = [
        {id: 0, name: 'Petya'},
        {id: 1, name: 'Elisey'}
    ]

    let messageData = [
        {id: 0, message: 'Privet'},
        {id: 1, message: 'Kak dela?'}
    ]





    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogsItem name='pidr' id="2228"/>*/}

            </div>

            <div className={s.messages}>

                <Message message={messageData[0].message}></Message>
                <Message message={messageData[1].message}></Message>




            </div>


        </div>
)


}

export default Dialogs;