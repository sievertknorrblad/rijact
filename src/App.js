import React, { Component } from 'react';
import { NewsItem, NewsItemList, Page, Header, Content, Footer } from './components';
import { api } from './utils';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      items: {},
    }
  }

  fetchAllItems = () => {
    api.getItemsIds()
      .then(ids => {
        Promise.all(ids.map(id => {
          return api.getItem(id)
        }))
          .then(itemResponses => {
            console.log(itemResponses)
            this.setState({
              ids: ids,
              items: itemResponses.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {})
            })
          })
      })
  }

  componentDidMount() {
    this.fetchAllItems()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isArraysEqual(Object.values(this.state.items), Object.values(nextState.items))
  }

  render() {
    const { items } = this.state
    return (
      <BrowserRouter>
        <Page>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" render={() => <NewsItemList items={items} refresh={this.fetchAllItems} />} />
              <Route path="/item/:itemId" render={(props) => <NewsItem item={items[props.match.params.itemId]} />} />
            </Switch>
          </Content>
          <Footer />
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
