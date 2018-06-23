import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../__testData__/store';
import combinedReducer from '../../src/reducers';
import BeerGridMenu from '../../src/components/beerGridMenu';

describe('Beer Grid Menu component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), reducers);
    const actual = renderer.create(<Provider store={store}>
      <BeerGridMenu />
    </Provider>);
    expect(actual).toMatchSnapshot();
  });
});