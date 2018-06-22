import { combineReducers } from 'redux';
import beersReducer from './beers';

export default () => combineReducers({
  beersReducer
});