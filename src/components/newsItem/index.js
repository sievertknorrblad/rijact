import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import './styles.css'
import * as ducks from '../../ducks';

class NewsItem extends Component {
  
  componentDidMount() {
    const { fetchItem, id } = this.props
    fetchItem(id)
  }

  render() {
    const { item } = this.props
    if (item === undefined || !Object.keys(item).length) {
      return <div />
    }
    const actualTime = item.time * 1000
    return (
      <div className="item-container">
        <a className="title" href={item.url}>
          {item.title}
        </a>
        <br />
        <Link to={`/item/${item.id}`}>
          {item.score} points
        </Link>
        <span> by {item.by} {<time dateTime={new Date(actualTime)}>{distanceInWordsToNow(new Date(actualTime))}</time>} ago | </span>
        <Link to={`/item/${item.id}`}>
          {item.descendants === 0
            ? 'discuss'
            : item.descendants + ' comments'
          }
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  item: ducks.data.items.selectors.item(state, ownProps.id),
});

const mapDispatchToProps = {
    fetchItem: ducks.data.items.actions.fetchItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
