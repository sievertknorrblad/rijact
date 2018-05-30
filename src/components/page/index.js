import React from 'react';
import './styles.css'
import { connect } from 'react-redux';

const Page = ({ children, darkTheme }) => (
  <div className={darkTheme ? "page page-dark": "page"}>      
   {children}
  </div>
)

const mapStateToProps = state => ({
  darkTheme: state.ui.isDarkTheme,
})

export default connect(mapStateToProps, null)(Page);