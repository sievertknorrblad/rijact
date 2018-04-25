import React, { Component } from 'react';
import './styles.css'

const additionalMenu = [
    { text: 'Pure UI',          url: 'https://rauchg.com/2015/pure-ui' },
    { text: 'Documentation',    url: 'https://reactjs.org/docs/' },
    { text: 'PropTypes',        url: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
    { text: 'Create react app', url: 'https://github.com/facebook/create-react-app/' },
    { text: 'github',           url: 'https://github.com/user/repo' },
  ];

export const Footer = () => (
  <div className="footer">
    {additionalMenu.map(o => (<a key= {o.text} href={o.url}>{o.text}  </a>))}
  </div>
)