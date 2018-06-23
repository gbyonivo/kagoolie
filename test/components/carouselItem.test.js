import React from 'react';
import renderer from 'react-test-renderer';
import store from '../__testData__/store';
import CarouselItem from '../../src/components/carouselItem';

describe('CarouselItem component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<CarouselItem beer={store.beersReducer.beers[0]}/>);
    expect(actual).toMatchSnapshot();
  });
});