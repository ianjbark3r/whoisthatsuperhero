import { RECEIVE_COMICS } from '../types';

export const receiveComics = (payload) => ({
  type: RECEIVE_COMICS,
  payload
});
