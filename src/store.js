import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/rootReducer'

const middleware = applyMiddleware(logger, thunk, promise)
const store = createStore(rootReducer, middleware)

export default store
