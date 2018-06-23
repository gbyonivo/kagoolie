import React from 'react';
import renderer from 'react-test-renderer';
import store from '../__testData__/store';
import BeerGridMenuItem from '../../src/components/beerGridMenuItem';

describe('BeerGridMenuItem component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<BeerGridMenuItem beer={store.beersReducer.beers[0]}/>);
    expect(actual).toMatchSnapshot();
  });
});