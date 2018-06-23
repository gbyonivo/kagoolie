import { FETCH_BEERS, FINISHED_FETCHING_BEERS, ERROR_FETCHING_BEERS, SET_FILTER } from '../constants/actionTypes';
import { LOW_TO_HIGH } from '../constants/gridFilter';

const initialState = {
  beers: [],
  errors: [],
  isFetchingBeers: true,
  gridFilter: LOW_TO_HIGH
};

const ACTION_HANDLERS = {
  [FETCH_BEERS]: state => ({
    ...state,
    isFetchingBeers: true
  }),
  [FINISHED_FETCHING_BEERS]: (state, { beers }) => ({
    ...state,
    beers,
    isFetchingBeers: false
  }),
  [ERROR_FETCHING_BEERS]: (state, { error }) => ({
    ...state,
    errors: [...state.errors, error],
    isFetchingBeers: false
  }),
  [SET_FILTER]: (state, { gridFilter }) => ({
    ...state,
    gridFilter
  }),
};

export default (state = initialState, { payload, type }) => {
  const handler = ACTION_HANDLERS[type];
  return handler ? handler(state, payload) : state;
};