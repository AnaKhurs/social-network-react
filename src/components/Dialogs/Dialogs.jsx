import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
       <div className={classes.dialogs}>
           <div className={classes.dialogsItem}>
               <div className={`${classes.dialog} ${classes.active}`}>Nastya</div>
               <div className={classes.dialog}>Maks</div>
               <div className={classes.dialog}>Lena</div>
               <div className={classes.dialog}>Masha</div>
               <div className={classes.dialog}>Sasha</div>
               <div className={classes.dialog}>Alex</div>
               <div className={classes.dialog}>Pasha</div>
           </div>
           <div className={classes.messages}>
               <div className={classes.message}>Hi</div>
               <div className={classes.message}>How are you?</div>
               <div className={classes.message}>Yo!</div>
           </div>
       </div>
    );
}
export default Dialogs;