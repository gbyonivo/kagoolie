import React from 'react';
import renderer from 'react-test-renderer';
import store from '../__testData__/store';
import BeerListMenuItem from '../../src/components/beersListMenuItem';

describe('BeerListMenuItem component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<BeerListMenuItem beer={store.beersReducer.beers[0]} isExpanded={true} setExpandedBeerId={() => {}}/>);
    expect(actual).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const actual = renderer.create(<BeerListMenuItem beer={store.beersReducer.beers[1]} isExpanded={false} setExpandedBeerId={() => {}}/>);
    expect(actual).toMatchSnapshot();
  });
});