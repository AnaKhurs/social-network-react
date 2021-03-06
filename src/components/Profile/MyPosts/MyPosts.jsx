import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements =
        props.postData.map( p =>  <Post message={p.message} likecounter={p.likecounter}/>)


let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost ();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        < div className={classes.postsBlock}>
            < h2> My posts < /h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;