
export const ADD_BOOKING = 'ADD_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const CHOOSE_MEOWZER = 'CHOOSE_MEOWZER'

const INITIAL_STATE = {
  text: 'initial text',
  text1: 'meow',
  slots: [{id: 1, name: 'Elinore', parent: 'Rose Reid'},
  {id: 2, name: 'Zelda', parent: 'Marcus Olsson'},
  {id: 3, name: 'Mabel', parent: 'Andrea Reid'},
  {id: 4, name: 'Ginger', parent: 'Brenda Reid'},
  {id: 5, name: 'Ginger', parent: 'Brenda Reid'},],
  selected: null,
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

    case CHOOSE_MEOWZER:
    return (
      Object.assign({}, state, { selected: state.slots.find(findCat(action)) 
     })
    );
    default:
      return state
  }
}

export default booking

const findCat = (action) => (pointer, index, array) => {
  debugger
  return pointer.id === action.id
}   
//partial application