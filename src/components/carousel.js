import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommonCarousel from './commons/carousel';

import { selectBeersForCarousel } from '../selectors';
import CarouselItem from './carouselItem';

const Carousel = ({ beers, settings }) => <CommonCarousel settings={settings}>
  {
    beers.map(beer => <CarouselItem key={beer.id} beer={beer}/>)
  }
</CommonCarousel>;

Carousel.defaultProps = {
  beers: [],
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
};

Carousel.propTypes = {
  beers: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  beers: selectBeersForCarousel(state),
});


export default connect(mapStateToProps)(Carousel);