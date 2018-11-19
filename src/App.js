import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <SearchBar />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
