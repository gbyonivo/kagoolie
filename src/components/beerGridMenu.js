import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectBeersForGrid, selectGridFilterValue } from '../selectors';
import * as actions from '../actions';
import SelectInput from './commons/selectInput';
import * as gridFilterValues from '../constants/gridFilter';

const BeerGridMenu = ({ beers, setFilter, filterValue }) => <div>
  <SelectInput
    onChange={setFilter}
    label="abv"
    value={filterValue}
    options={Object.keys(gridFilterValues).map(key => ({ value: key, text: key }))}
    name="gridFilter" />
  {
    beers.map(beer => <div key={beer.id}>
      {beer.name} {beer.abv}
    </div>)
  }
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