import { TOGGLE_COMICS } from '../types';

export const toggleComics = bool => ({
  type: TOGGLE_COMICS,
  bool
});
