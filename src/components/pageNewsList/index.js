import React, { Component } from 'react';
import { api } from '../../utils';
import { NewsItemList } from '../newsItemList';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
    }
  }

  fetchAllItems = () => {
    api.getItemsIds()
      .then(ids => {
        this.setState({
          ids: ids,
        })
      })
  }

  componentDidMount() {
    this.fetchAllItems()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isArraysEqual(this.state.ids, nextState.ids)
  }

  render() {
    const { ids } = this.state
    return <div>
      <button onClick={this.fetchAllItems}>Refresh</button>
      {!ids.length ? <div>Loading</div> : <NewsItemList ids={ids} />}
    </div>;
  }
}

export { PageNewsList };