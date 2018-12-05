import { RECEIVE_HEROINFO } from '../types';

export const receiveHeroInfo = (payload) => ({
  type: RECEIVE_HEROINFO,
  payload
});
