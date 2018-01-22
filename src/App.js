import React, { Component } from 'react';
import './App.css';
import { booking, booking1, slots } from './action-creators/action-creator'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInputText: ''};
    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(e) {
    this.setState({
      userInputText: e.target.value
    })
  }

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
        </p>
        <p>  Text Here: {this.props.state.booking.text}</p>
        <button onClick={() => this.props.dispatch(booking("cats"))} >
          change stuff
          </button>
 
      <div>
        <textarea type="text" onChange={this.handleChange} value={this.state.userInputText}/>
     
        <button onClick={() => this.props.dispatch(booking1(this.state.userInputText))} >
          change stuff2
          </button>
          <p>  Person has chosen to travel on December the : {this.props.state.booking.text1}</p>
          </div>
       
          <ul>
          {this.props.state.booking.slots.map((slot) =>
            <li key={slot.id}>
             <button onClick={ () => this.props.dispatch(slots(slot.id))}> {slot.name} </button>
            </li>
          )}
          </ul>
          <p>{this.props.state.booking.selected && this.props.state.booking.selected.name}</p>     
 </div>
    );
  }
}
