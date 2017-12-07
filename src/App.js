import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { booking } from './action-creators/action-creator.js';
import './App.css';

class App extends Component {
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
        <p> my special Text: {this.props.text}</p>
        <button onClick={() => this.props.booking("hellowz")} >
          change stuff
          </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ booking }, dispatch)
}

function mapStateToProps(state) {
  const { text } = state.booking;
  return { text };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
