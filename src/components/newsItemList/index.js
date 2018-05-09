import React, { Component } from 'react';
import { api } from '../../utils';
import { NewsItem } from '../newsItem';
import './styles.css'

export const NewsItemList = ({ids}) => (
  <ol>
    {ids.map(id => (<li key={id}><NewsItem id={id} /></li>))}
  </ol>
)