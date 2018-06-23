import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchBeersFromApi } from '../api/apiService';
import {
  finishedFetchingBeers,
  errorFetchingBeers,
} from '../actions';
import { FETCH_BEERS } from '../constants/actionTypes';


export function* fetchBeersSaga() {
  try {
    const data = yield call(fetchBeersFromApi);
    yield put(finishedFetchingBeers(data));
  } catch (error) {
    yield put(errorFetchingBeers('error fetching beers'));
  }
}

export function* sagas() {
  yield all([
    call(fetchBeersSaga),
    takeLatest(FETCH_BEERS, fetchBeersSaga),
  ]);
}

export default sagas;