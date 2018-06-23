import React from 'react';
import renderer from 'react-test-renderer';
import Ingredients from '../../src/components/ingredients';
import store from '../__testData__/store';

describe('Ingredients component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<Ingredients ingredients={store.beersReducer.beers[0].ingredients}/>);
    expect(actual).toMatchSnapshot();
  });
});