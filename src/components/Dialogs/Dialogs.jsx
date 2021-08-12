import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogData.map((d) => <DialogItem name={d.name} photoDialogs={d.photoDialogs} id={d.id}/>)

    let messagesElements =
        props.state.messageData.map((m) => <Message message={m.message}/>)

    let newMessageSend = React.createRef();

    let send = () => {
        let messageSend = newMessageSend.current.value;
        alert (messageSend);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    {dialogsElements}
                </div>
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.send}>
                    <textarea ref={newMessageSend}></textarea>
                    <button onClick={send}>Send</button>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;