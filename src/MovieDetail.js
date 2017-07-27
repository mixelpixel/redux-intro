import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
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
