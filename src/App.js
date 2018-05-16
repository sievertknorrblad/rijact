import React, { Component } from 'react';
import { NewsItem, PageNewsList, Page, Header, Content, Footer } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Page>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" render={() => <PageNewsList />} />
              <Route path="/item/:itemId" render={(props) => <NewsItem id={props.match.params.itemId} />} />
            </Switch>
          </Content>
          <Footer />
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
