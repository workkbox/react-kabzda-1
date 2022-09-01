import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from "./redux/state"
import {addPost, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
export let rerenderEntireTree =(state)=>{
//const root = ReactDOM.createRoot(document.getElementById('root'));          pereneseno ^^
root.render(
    <React.StrictMode>

        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
);
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
