import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 0, message: 'Privetik', likesCount: 1},
    {id: 1, message: 'govNo', likesCount: 228}
]


let dialogs = [
    {id: 0, name: 'Petya'},
    {id: 1, name: 'Elisey'}
]

let messages = [
    {id: 0, message: 'Privet'},
    {id: 1, message: 'Kak dela?'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
