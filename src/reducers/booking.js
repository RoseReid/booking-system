
export const ADD_BOOKING = 'ADD_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'

const INITIAL_STATE = {
  text: 'initial text',
  text1: 'meow',
  slots: [{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}]
}

const booking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      console.log("reducer got: ", action.text);
      return (
        Object.assign({}, state, { text: state.text === action.text ? '': action.text })
      );

    case REMOVE_BOOKING:
    console.log("reducer got: ", action.text1);
    return (
      Object.assign({}, state, { text1: state.text1 === action.text1? 'reducer works': action.text1})
    );

    default:
      return state
  }
}

export default booking
