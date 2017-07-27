export default (selectedMovie = null, action) => {
  console.log('>>>>>>>>> action of reducer/selectedMovieReducer.js', action);
  switch(action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return selectedMovie;
  }
};
