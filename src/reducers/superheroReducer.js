import * as types from '../types'

const superheroReducer = (state = {name: 'Thor'}, action) => {
  switch (action.type) {
    case types.SET_SUPERHERO: {
      return {
        ...state,
        name: action.payload
      }
    }
    default:
      return state;
  }
}

export default superheroReducer
