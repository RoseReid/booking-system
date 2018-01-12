import { ADD_BOOKING } from './../reducers/booking.js';
import { REMOVE_BOOKING } from './../reducers/booking.js';


export function booking(text) {
  console.log("got input:", text);
  text = text + " more cats!";
  return {
    type: ADD_BOOKING,
    text: text,
  }
}

export function booking1(text1) {
  console.log("got input2:", text1);
  text1 = text1 + " for a week";
  return {
    type: REMOVE_BOOKING,
    text1: text1,
  }
}