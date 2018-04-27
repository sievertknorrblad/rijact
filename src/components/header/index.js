import React, { Component } from 'react';
import './styles.css'

const mainMenu = [
    { text: 'New',    url: 'https://news.ycombinator.com/newest' },
    { text: 'Show',   url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
  ];

export const Header = () => (
  <div className="header">
    {mainMenu.map(item => (<a key={item.text} href={item.url}>{item.text}  </a>))}
  </div>
)