export default (selectedMovie = null, action) => {
  console.log('>>>>>>>>> action: reducer/selectedMovieReducer.js', action);
  switch(action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return selectedMovie;
  }
};
