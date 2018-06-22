import { call } from 'redux-saga/effects';
import beersSagas from './beersSagas';

export default function* rootSaga() {
  yield [call(beersSagas)];
}