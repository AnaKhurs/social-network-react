import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
                <div className={classes.avaName}>
                    <img src={props.photoDialogs}/>
                    <text> {props.name} </text>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;