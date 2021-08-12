import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
           <div> {props.message}</div>
            <div className={classes.textarea}>
            </div>
        </div>
    );
}

export default Message;