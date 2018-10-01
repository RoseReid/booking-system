import { ADD_BOOKING } from './../reducers/booking.js';
import { REMOVE_BOOKING } from './../reducers/booking.js';
import { CHOOSE_MEOWZER } from './../reducers/booking.js';


export function booking(text) {
  console.log("got input:", text);
  return {
    type: ADD_BOOKING,
    text: `${text} more cats!`,
  }
}

export function booking1(text1) {
  console.log("got input2:", text1);
  return {
    type: REMOVE_BOOKING,
    text1: `${text1} for a week`,
  }
}

export function slots(catInput) {
  console.log("got cat Input:", catInput);
  return {
    type: CHOOSE_MEOWZER,
    id: catInput,
    }
}
