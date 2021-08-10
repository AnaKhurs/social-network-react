import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements =
        props.postData.map( p =>  <Post message={p.message} likecounter={p.likecounter}/>)
    return (
        < div className={classes.postsBlock}>
            < h2> My posts < /h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;