import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.ProfilePage.postData}
                     addPost={props.addPost}
                     newPostText={props.ProfilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;