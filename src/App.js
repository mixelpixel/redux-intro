import React, { Component } from 'react';
// import logo from './logo.svg';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
