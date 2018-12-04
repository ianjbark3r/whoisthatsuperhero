import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

import Header from './layout/Header';
import Search from './layout/Search';
import HeroInfo from './layout/HeroInfo';
import Comics from './layout/Comics';
import Series from './layout/Series';
import Events from'./layout/Events';
import Links from './layout/Links';
import Footer from './layout/Footer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Search />
          <HeroInfo />
          <Comics />
          <Series />
          <Events />
          <Links />
          <Footer />
        </div>
      </Provider>
    );
  }
}
