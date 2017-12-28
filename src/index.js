import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import bookingApp from './reducers/index';

let store = createStore(bookingApp)
const render = () => ReactDOM.render(
<App state={store.getState()} dispatch={store.dispatch} />, 
document.getElementById('app'))   
store.subscribe(render);
render();