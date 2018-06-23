import { call, put } from 'redux-saga/effects';
import { fetchBeersSaga } from '../../src/sagas/beersSagas';
import { fetchBeersFromApi } from '../../src/api/apiService';
import {
  finishedFetchingBeers
} from '../../src/actions';

describe('fetchBeersSaga', () => {
  it('should call fetchBeersFromApi and finishedFetchingBeers', () => {
    const gen = fetchBeersSaga();
    const actual = [
      gen.next(),
      gen.next([]),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchBeersFromApi) },
      { done: false, value: put(finishedFetchingBeers([])) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

