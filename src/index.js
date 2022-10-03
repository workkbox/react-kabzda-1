import './index.css';

import store from "./redux/redux-store"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContext, {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
export let rerenderEntireTree = (state) => {
//const root = ReactDOM.createRoot(document.getElementById('root'));          pereneseno ^^
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
            </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
