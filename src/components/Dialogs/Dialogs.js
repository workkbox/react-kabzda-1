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


    let dialogs = [
        {id: 0, name: 'Petya'},
        {id: 1, name: 'Elisey'}
    ]

    let messages = [
        {id: 0, message: 'Privet'},
        {id: 1, message: 'Kak dela?'}
    ]




    let dialogsElements = dialogs.map(
    d=><DialogsItem name={d.name} id={d.id}/>
)


let  messagesElements = messages.map(
    m=><Message message={m.message}/>
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