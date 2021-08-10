import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogData.map((d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements =
        props.state.messageData.map((m) => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    {dialogsElements}
                </div>
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;