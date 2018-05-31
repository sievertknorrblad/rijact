import React from 'react';
import { NewsItem } from '../../components';
import './styles.css'

export const NewsItemList = ({ ids }) => (
  <ol>
    {ids.map(id => (<li key={id}><NewsItem id={id} /></li>))}
  </ol>
)