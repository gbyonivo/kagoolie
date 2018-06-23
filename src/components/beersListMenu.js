import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectBeers } from '../selectors';
import BeerListMenuItem from './beersListMenuItem';

class BeerListMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedBeerId: undefined
    };
    this.setExpandedBeerId = this.setExpandedBeerId.bind(this);
  }
  setExpandedBeerId(beerId) {
    this.setState(state => ({
      expandedBeerId: state.expandedBeerId === beerId ? undefined : beerId
    }));
  }
  render() {
    const { beers } = this.props;
    const { expandedBeerId } = this.state;
    return (<div>
      <h2>List of Beers</h2>
      <ul>
        {beers.map(beer => <BeerListMenuItem
          beer={beer}
          key={beer.id}
          setExpandedBeerId={this.setExpandedBeerId}
          isExpanded={beer.id === expandedBeerId}
        />)}
      </ul>
    </div>);
  }
}

const mapStateToProps = state => ({
  beers: selectBeers(state)
});

BeerListMenu.propTypes = {
  beers: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(BeerListMenu);