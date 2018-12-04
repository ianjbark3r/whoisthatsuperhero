const superheroReducer = (state = {name: 'Thor'}, action) => {
  switch (action.type) {
    case 'SET_SUPERHERO': {
      return {
        name: action.payload
      }
    }
    default:
      return state;
  }
}

export default superheroReducer
