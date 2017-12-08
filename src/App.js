import React, { Component } from 'react';
import './App.css';
import { booking } from './action-creators/action-creator'

export default class App extends Component {
  componentDidUpdate(newProps){
    console.log("i should update with:", newProps);
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Booking app</h1>
        </header>
        <p className="App-intro">
          Words and more words
        </p>
        <p> my special Text: {this.props.state.booking.text}</p>
        <button onClick={() => this.props.dispatch(booking("cats"))} >
          change stuff
          </button>
      </div>
    );
  }
}
