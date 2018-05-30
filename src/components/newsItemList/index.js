import React from 'react';
import { default as NewsItem } from '../newsItem';
import './styles.css'

export const NewsItemList = ({ ids }) => (
  <ol>
    {ids.map(id => (<li key={id}><NewsItem id={id} /></li>))}
  </ol>
)