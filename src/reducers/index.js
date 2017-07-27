import { combineReducers} from 'redux';
import moviesReducer from './movies';
import selectedMovieReducer from './selectedMovieReducer';

// to accomodate an array of movie titles
// and the selection of one movie
const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;
