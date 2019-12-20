/**
 * This is the example of redux reducer
 */
export default function (state = {
  exampleData: {},
}, action) {
  switch (action.type) {
    case 'SET_EXAMPLE':
      state.example = action.payload;
      return Object.assign({}, state);
  
    default:
      return state;
  }
}