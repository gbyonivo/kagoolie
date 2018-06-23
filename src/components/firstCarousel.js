import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from './commons/carousel';

import { selectBeersForCarousel } from '../selectors';
import CarouselItem from './carouselItem';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const FirstCarousel = ({ beers }) => <Carousel settings={settings}>
  {
    beers.map(beer => <CarouselItem key={beer.id} beer={beer}/>)
  }
</Carousel>;

FirstCarousel.propTypes = {
  beers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  beers: selectBeersForCarousel(state),
});


export default connect(mapStateToProps)(FirstCarousel);