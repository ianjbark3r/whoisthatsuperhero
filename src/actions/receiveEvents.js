import { RECEIVE_EVENTS } from '../types';

export const receiveEvents = (payload) => ({
  type: RECEIVE_EVENTS,
  payload
});
