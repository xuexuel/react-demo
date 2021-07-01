import { combineReducers, createStore } from 'redux';
import topics from './reducer/topic';
const store = createStore(combineReducers({topics}));

export default store;