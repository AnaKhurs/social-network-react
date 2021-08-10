import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


let postData = [
    {id: 1, message: 'Hi, how are you?', likecounter: 15},
    {id: 2, message: 'It is my new post!', likecounter: 18}
]

let dialogsData = [
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


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route path='/profile' render={() => <Profile postData={postData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
