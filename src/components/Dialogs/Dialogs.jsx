import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <DialogItem name='Nastya' id='1'/>
                    <DialogItem name='Lena' id='2'/>
                    <DialogItem name='Masha' id='3'/>
                    <DialogItem name='Sasha' id='4'/>
                    <DialogItem name='Alex' id='5'/>
                    <DialogItem name='Maks' id='6'/>
                    <DialogItem name='Pasha' id='7'/>
                </div>
            </div>

            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo!'/>
            </div>
        </div>
    );
}
export default Dialogs;