import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectBeersForGrid, selectGridFilterValue } from '../selectors';
import * as actions from '../actions';
import SelectInput from './commons/selectInput';
import * as gridFilterValues from '../constants/gridFilter';
import BeerGridMenuItem from './beerGridMenuItem';
import styles from './beerGridMenu.scss';

const BeerGridMenu = ({ beers, setFilter, filterValue }) => <div className={styles.beerGridMenu}>
  <SelectInput
    onChange={setFilter}
    label="Alcohol Volume"
    value={filterValue}
    options={Object.keys(gridFilterValues).map(key => ({ value: key, text: key }))}
    name="gridFilter" />
  <div className={styles.beerGridMenuItems}>
    {
      beers.map(beer => <BeerGridMenuItem key={beer.id} beer={beer} />)
    }
  </div>
</div>;

BeerGridMenu.propTypes = {
  beers: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  beers: selectBeersForGrid(state),
  filterValue: selectGridFilterValue(state),
});

const mapActionToProps = dispatch => ({
  setFilter: compose(dispatch, actions.setFitler)
});

export default connect(mapStateToProps, mapActionToProps)(BeerGridMenu);