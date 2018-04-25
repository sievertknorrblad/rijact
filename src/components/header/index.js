import React, { Component } from 'react';
import './styles.css'

const mainMenu = [
    { text: 'New',    url: 'https://news.ycombinator.com/newest' },
    { text: 'Show',   url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
  ];

export const Header = () => (
  <div className="header">
    {mainMenu.map(o => (<a key={o.text} href={o.url}>{o.text}  </a>))}
  </div>
)