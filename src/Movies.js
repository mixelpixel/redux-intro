import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Movies!</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(Movies);
