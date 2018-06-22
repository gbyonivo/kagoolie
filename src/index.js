import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Component from './components';
import reducer from './reducers';
import rootSaga from './sagas';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  window.___INITIAL_STATE__, //eslint-disable-line
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f //eslint-disable-line
  )
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/" component={Component} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line