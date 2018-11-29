import React, { Component } from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';
import SuperheroDisplay from './layout/SuperheroDisplay'

class App extends Component {
  defaultState = {
    superhero: 'Thor'
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.defaultState
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      superhero: e.target.elements.name.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSubmit={this.handleSubmit} />
        <SuperheroDisplay superhero={this.state.superhero}/>
        <Footer />
      </div>
    )
  }
}

export default App;
