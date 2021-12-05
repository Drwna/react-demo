const moviesReducer = {
  setMovies: (state, action) => {
    return { ...state, movies: action.movies };
  },
};

export default moviesReducer;
