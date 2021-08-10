import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Maks'},
        {id: 7, name: 'Pasha'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'}
    ]

    let dialogsElements = dialogsData
        .map((d) => <DialogItem name={d.name} id={d.id}/>
        )

    let messagesElements = messageData
        .map((m) => <Message message={m.message}/>
        )

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