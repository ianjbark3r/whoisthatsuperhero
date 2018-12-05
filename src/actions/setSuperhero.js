import { SET_SUPERHERO } from '../types';

export const setSuperhero = name => ({
  type: SET_SUPERHERO,
  payload: name
});
