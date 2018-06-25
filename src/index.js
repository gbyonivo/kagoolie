import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BeerListMenu from './components/beersListMenu';
import BeerGridMenu from './components/beerGridMenu';
import CarouselWrapper from './hocs/carouselWrapper';
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

const Carousel1 = CarouselWrapper();
const Carousel2 = CarouselWrapper({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear'
});

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/" component={BeerListMenu} />
      <Route path="/" component={Carousel1} />
      <Route path="/" component={Carousel2} />
      <Route path="/" component={BeerGridMenu} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line