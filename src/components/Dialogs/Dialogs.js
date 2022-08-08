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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name='dyadya' id="1228"/>
                <DialogsItem name='pidr' id="2228"/>
                <DialogsItem name='p1dr'/>
                <DialogsItem name='pidr'/>
                <DialogsItem name='pider'/>
            </div>

            <div className={s.messages}>

                <Message message='govno'></Message>
                <Message message='govno'></Message>
                <Message message='govno'></Message>


            </div>


        </div>
)


}

export default Dialogs;