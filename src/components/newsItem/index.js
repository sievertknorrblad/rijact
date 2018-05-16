import React from 'react';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import './styles.css'

export const NewsItem = ({item}) => {

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
      { item.descendants === 0
        ? 'discuss'
        : item.descendants + ' comments'
      }
      </Link>
    </div>
  )
}