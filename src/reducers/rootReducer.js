import { combineReducers } from 'redux';

import uiReducer from './uiReducer';
import superheroReducer from './superheroReducer';
import heroInfoReducer from './heroInfoReducer';
import comicsReducer from './comicsReducer';
import seriesReducer from './seriesReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  superhero: superheroReducer,
  heroInfo: heroInfoReducer,
  comics: comicsReducer,
  series: seriesReducer,
  events: eventsReducer
})

export default rootReducer
