import { FETCH_BEERS, FINISHED_FETCHING_BEERS, ERROR_FETCHING_BEERS } from '../constants/actionTypes';

export const fetchBeers = () => ({
  type: FETCH_BEERS
});

export const finishedFetchingBeers = beers => ({
  type: FINISHED_FETCHING_BEERS,
  payload: { beers }
});

export const errorFetchingBeers = error => ({
  type: ERROR_FETCHING_BEERS,
  payload: { error }
});
