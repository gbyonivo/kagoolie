import { selectGridFilterValue, selectBeers } from '../../src/selectors';
import store from '../__testData__/store';

describe('selectGridFilterValue', () => {
  it('should match the one in store', () => {
    const actual = selectGridFilterValue(store);
    const expected = store.beersReducer.gridFilter;
    expect(actual).toEqual(expected);
  });
});

describe('selectBeers', () => {
  it('should match the one in store', () => {
    const actual = selectBeers(store);
    const expected = store.beersReducer.beers;
    expect(actual.length).toEqual(expected.length);
  });
});