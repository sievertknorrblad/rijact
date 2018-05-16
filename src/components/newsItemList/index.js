import React from 'react';
import { NewsItem } from '../newsItem';
import './styles.css'

export const NewsItemList = ({ items, refresh }) => (
  <div>
   <button onClick={refresh}>Refresh</button>
     <ol>
      {Object.values(items).map(item => (<li key={item.id}><NewsItem item={item} /></li>))}
    </ol>
  </div>
)