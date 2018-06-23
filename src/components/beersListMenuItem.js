import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './ingredients';
import styles from './beerListMenuItem.scss';

const BeerListMenuItem = ({
  beer, setExpandedBeerId, isExpanded
}) =>
  <li className={`${styles.beerListMenuItem} ${isExpanded ? styles.isExpanded : styles.isCollapsed}`}>
    <h4 onClick={() => setExpandedBeerId(beer.id)}>{beer.name}</h4>
    <div>
      {beer.tagline}
      {beer.description}
      {beer.first_brewed}
      <Ingredients ingredients={beer.ingredients} />
    </div>
  </li>;

BeerListMenuItem.propTypes = {
  beer: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setExpandedBeerId: PropTypes.func.isRequired
};

export default BeerListMenuItem;