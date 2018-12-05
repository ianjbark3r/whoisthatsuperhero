import { RECEIVE_SERIES } from '../types';

export const receiveSeries = (payload) => ({
  type: RECEIVE_SERIES,
  payload
});
