import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.movie.map((movies, i) => {
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
