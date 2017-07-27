import React, { Component } from 'react';
import { connect } from 'react-redux';
import ul from './Movies.css'
import { selectMovie } from './actions'

class Movies extends Component {
  render() {
    // console.log(this.props);
    return (
      <ul>
        {this.props.movies.map((movie, i) => {
          return (
            <li key={i}
                onClick={() => this.props.selectMovie(movie)}
                >
              {movie.title}
            </li>
          );
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

export default connect(mapStateToProps, { selectMovie })(Movies);
