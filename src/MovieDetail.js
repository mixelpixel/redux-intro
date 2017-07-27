import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (this.props.movie === null) return null;
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(Movie);
