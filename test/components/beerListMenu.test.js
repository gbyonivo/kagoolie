import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../__testData__/store';
import combinedReducer from '../../src/reducers';
import BeersListMenu from '../../src/components/beersListMenu';

describe('BeersListMenu component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), reducers);
    const actual = renderer.create(<Provider store={store}>
      <BeersListMenu />
    </Provider>);
    expect(actual).toMatchSnapshot();
  });
});