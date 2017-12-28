
export const ADD_BOOKING = 'ADD_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'

const INITIAL_STATE = {
  text: 'initial text'
}

const booking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      console.log("reducer got: ", action.text);
      return (
        Object.assign({}, state, { text: state.text === action.text ? '': action.text })
      );

    case REMOVE_BOOKING:
      return state.map(book =>
        (book.id === action.id)
          ? { ...book, completed: !book.completed }
          : book
      )
    default:
      return state
  }
}

export default booking
