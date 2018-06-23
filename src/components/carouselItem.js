import React from 'react';
import PropTypes from 'prop-types';
import styles from './carouselItem.scss';

const CarouselItem = ({ beer }) => <div className={styles.carouselItem}>
  <div className={styles.image}><img src={beer.image_url} alt="" /></div>
  <div className={styles.description}>
    <h2>{beer.name}</h2>
    {beer.description}
  </div>
</div>;

CarouselItem.propTypes = {
  beer: PropTypes.object.isRequired
};

export default CarouselItem;