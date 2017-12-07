import { ADD_BOOKING } from './../reducers/booking.js';


export function booking(text) {
  console.log("got input:", text);
  text = text + " more cats!";
  return {
    type: ADD_BOOKING,
    text: text,
  }
}