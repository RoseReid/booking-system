import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import bookingApp from './reducers/index';
import { Provider } from 'react-redux';

let store = createStore(bookingApp)   

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));   //some kind of app thing here
