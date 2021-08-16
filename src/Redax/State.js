import {rerenderEntireTree} from "../render";

let state = {
    ProfilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likecounter: 15},
            {id: 2, message: 'It is my new post!', likecounter: 18}
        ],
        newPostText: 'YoYoYo'
    },
    DialogsPage: {
            dialogData: [
                {id: 1, photoDialogs: 'https://images.unsplash.com/photo-1511763368359-c0d890ede0c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGZhY2UlMjBnaXJsfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', name: 'Nastya'},
                {id: 2, photoDialogs: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMGdpcmx8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', name: 'Lena'},
                {id: 3, photoDialogs: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZSUyMGdpcmx8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', name: 'Masha'},
                {id: 4, photoDialogs: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80', name: 'Sasha'},
                {id: 5, photoDialogs: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', name: 'Alex'},
                {id: 6, photoDialogs: 'https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', name: 'Maks'},
                {id: 7, photoDialogs: 'https://images.unsplash.com/photo-1585856231313-7d7a30d64a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80 s', name: 'Pasha'}
            ],

        // Sidebar: {
        //     sidebarData: [
        //         {id: 2, photoDialogs: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMGdpcmx8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', name: 'Lena'},
        //         {id: 4, photoDialogs: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80', name: 'Sasha'},
        //         {id: 7, photoDialogs: 'https://images.unsplash.com/photo-1585856231313-7d7a30d64a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80 s', name: 'Pasha'}
        //     ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'}
            ]
        }
}

 // window.state = state;

export let addPost = () => {
    let newPost = {
        id:3, message: state.ProfilePage.newPostText, likecounter: 1
    };

    state.ProfilePage.postData.push(newPost);
    state.ProfilePage.updateNewPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;