import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { radioReducer, } from './reducer/radioReducer';
import { Provider } from "react-redux";

const store = createStore( radioReducer );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode><App/></React.StrictMode>
    </Provider>
);
