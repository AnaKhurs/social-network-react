import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg'/>
            {props.message}
            <div>
                <span> {props.likecounter}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Jbit0uDj7l7J-MBHYvL96QLXvQPAs1P4w6pyax5q2r_7YIZkIxyGVdBnxuBw7T6TAl4&usqp=CAU'/>
                </span>
            </div>
        </div>
    )
}
export default Post;