import { combineReducers } from 'redux';

import superheroReducer from './superheroReducer';
import heroInfoReducer from './heroInfoReducer';
import comicsReducer from './comicsReducer';
import seriesReducer from './seriesReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  superhero: superheroReducer,
  heroInfo: heroInfoReducer,
  comics: comicsReducer,
  series: seriesReducer,
  events: eventsReducer
})

export default rootReducer
