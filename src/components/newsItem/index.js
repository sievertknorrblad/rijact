import React from 'react';
import { api } from '../../utils';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import { toggleTheme } from '../../actions';
import './styles.css'

const NewsItem = ({id}) => {

  const item = api.getItem(id);
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
      { item.descendants === 0
        ? 'discuss'
        : item.descendants + ' comments'
      }
      </Link>
    </div>
  )
}

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(null, mapDispatchToProps)(NewsItem);