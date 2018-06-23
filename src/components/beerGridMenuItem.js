import React from 'react';
import PropTypes from 'prop-types';

import styles from './beerGridMenuItem.scss';

const BeerGridMenuItem = ({ beer }) => <div className={styles.beerGridMenuItem}>
  <div className={styles.image}><img src={beer.image_url} alt="" /></div>
  <div className={styles.name}>{beer.name}</div>
</div>;

BeerGridMenuItem.propTypes = {
  beer: PropTypes.object.isRequired
};

export default BeerGridMenuItem;