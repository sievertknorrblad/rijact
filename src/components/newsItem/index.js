import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import './styles.css'
import { api } from '../../utils';

class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
    }
  }

  componentDidMount() {
    const { id } = this.props
    api.getItem(id)
      .then(itemResponse => {
        this.setState(
          {
            item: itemResponse
          }
        )
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.item !== nextState.item
  }

  render() {
    const { item } = this.state

    if (item === undefined) {
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

export { NewsItem };