import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'Hi, how are you?', likecounter: 15},
    {id: 2, message: 'It is my new post!', likecounter: 18}
]

let dialogData = [
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


ReactDOM.render(<App postData={postData} dialogData={dialogData} messageData={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
