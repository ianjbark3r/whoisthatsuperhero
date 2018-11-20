import React, { Component } from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default App;
