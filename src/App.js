import React, { Component } from 'react';
import { Page, Header, Content, Footer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Content />
        <Footer />
      </Page>
    );
  }
}

export default App;
