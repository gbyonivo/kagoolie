import { FETCH_BEERS, FINISHED_FETCHING_BEERS, ERROR_FETCHING_BEERS } from '../constants/actionTypes';

const initialState = {
  beers: [],
  errors: [],
  isFetchingBeers: true
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
  })
};

export default (state = initialState, { payload, type }) => {
  const handler = ACTION_HANDLERS[type];
  return handler ? handler(state, payload) : state;
};