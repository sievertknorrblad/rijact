import React from 'react';
import './styles.css'
import { connect } from 'react-redux';
import * as ducks from '../../ducks';
import { withRouter } from 'react-router-dom';

const Page = ({ children, darkTheme }) => (
  <div className={darkTheme ? "page page-dark": "page"}>      
   {children}
  </div>
)

const mapStateToProps = state => ({
  darkTheme: ducks.ui.selectors.isDarkTheme(state),
})

export default withRouter(connect(mapStateToProps, null)(Page));