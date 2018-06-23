import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import './carousel.scss';

const Carousel = ({ children, settings }) => <Slider {...settings}>
  {children}
</Slider>;

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};


export default Carousel;