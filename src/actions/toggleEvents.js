import { TOGGLE_EVENTS } from '../types';

export const toggleEvents = bool => ({
  type: TOGGLE_EVENTS,
  bool
});
