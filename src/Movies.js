import React, { Component } from 'react';
import { connect } from 'react-redux';
import ul from './Movies.css'

class Movies extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.movies.map((movie, i) => {
          return <li key={i}>{movie.title}</li>
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(Movies);
