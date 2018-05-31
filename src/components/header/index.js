import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import './styles.css'

const mainMenu = [
    { text: 'New',    url: 'https://news.ycombinator.com/newest' },
    { text: 'Show',   url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
  ];

const Header = ({ toggleTheme }) => (
  <div className="header">
    <Link to="/">
      <img src="https://news.ycombinator.com/y18.gif" alt="durov" />
    </Link>
    {mainMenu.map(item => (<a key={item.text} href={item.url}>{item.text}  </a>))}
    <button onClick={e => toggleTheme()}>toggle the theme</button>
  </div>
)

const mapDispatchToProps = {
  toggleTheme: actions.toggleTheme,
};

export default connect(null, mapDispatchToProps)(Header);