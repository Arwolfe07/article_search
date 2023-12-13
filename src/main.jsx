import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createStore, compose, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css'
import reducers from './reducers/index.js';


// Create a reducer store so that data from the api can be stored and use all over the app.
const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>);