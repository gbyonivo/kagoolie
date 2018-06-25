import React from 'react';
import Carousel from '../components/carousel';

export default (settings) => {
  const CarouselWrapper = () => <Carousel settings = {settings} />;
  return CarouselWrapper;
};