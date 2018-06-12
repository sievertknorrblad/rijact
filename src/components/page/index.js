import React from 'react';
import './styles.css'
import { connect } from 'react-redux';
import * as ducks from '../../ducks';

const Page = ({ children, darkTheme }) => (
  <div className={darkTheme ? "page page-dark": "page"}>      
   {children}
  </div>
)

const mapStateToProps = state => ({
  darkTheme: ducks.ui.selectors.isDarkTheme(state),
})

export default connect(mapStateToProps, null)(Page);