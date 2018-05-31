import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import './styles.css'
import { fetchItem as fetchItemAction } from '../../actions';

class NewsItem extends Component {
  
  componentDidMount() {
    const { fetchItem, id } = this.props
    fetchItem(id)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.item !== nextProps.item
  }

  render() {
    const { item } = this.props
    if (item === undefined || item.isLoading) {
      return <div />
    }
    const fetchedItem = item.item
    const actualTime = fetchedItem.time * 1000
    return (
      <div className="item-container">
        <a className="title" href={fetchedItem.url}>
          {fetchedItem.title}
        </a>
        <br />
        <Link to={`/item/${fetchedItem.id}`}>
          {fetchedItem.score} points
        </Link>
        <span> by {item.by} {<time dateTime={new Date(actualTime)}>{distanceInWordsToNow(new Date(actualTime))}</time>} ago | </span>
        <Link to={`/item/${fetchedItem.id}`}>
          {fetchedItem.descendants === 0
            ? 'discuss'
            : fetchedItem.descendants + ' comments'
          }
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  item: state.data.items[ownProps.id],
});

const mapDispatchToProps = {
  fetchItem: fetchItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
