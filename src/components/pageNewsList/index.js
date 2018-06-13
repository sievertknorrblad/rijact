import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewsItemList } from '../';
import * as ducks from '../../ducks';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

class PageNewsList extends Component {

  componentDidMount() {
    const { fetchItemsIds } = this.props
    fetchItemsIds()
  }

  shouldComponentUpdate(nextProps) {
    return !isArraysEqual(this.props.ids, nextProps.ids)
  }

  render() {
    const { ids } = this.props
    return <div>
      <button onClick={this.fetchAllItems}>Refresh</button>
      {ids && ids.length ? <NewsItemList ids={ids} /> : <div>Loading</div>}
    </div>;
  }
}

const firstN = (n, arr) => arr.slice(0, n);

const mapStateToProps = (state, ownProps) => ({
  ids: firstN(ducks.ui.selectors.itemsToShow(state), ducks.data.itemsIds.selectors.ids(state))
});

const mapDispatchToProps = {
  fetchItemsIds: ducks.data.itemsIds.actions.fetchItemsIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);
