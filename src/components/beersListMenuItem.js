import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './ingredients';
import styles from './beersListMenuItem.scss';

const BeerListMenuItem = ({
  beer, setExpandedBeerId, isExpanded
}) =>
  <li className={`${styles.beerListMenuItem} ${isExpanded ? styles.isExpanded : styles.isCollapsed}`}>
    <h4 onClick={() => setExpandedBeerId(beer.id)}>{beer.name}</h4>
    <div>
      <div className={styles.tagline}><em>Tagline: </em><span>{beer.tagline}</span></div>
      <div className={styles.date}><em>First Brewed: </em><span>{beer.first_brewed}</span></div>
      <div className={styles.description}>{beer.description}</div>
      <Ingredients ingredients={beer.ingredients} />
    </div>
  </li>;

BeerListMenuItem.propTypes = {
  beer: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setExpandedBeerId: PropTypes.func.isRequired
};

export default BeerListMenuItem;