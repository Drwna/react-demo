const moviesReducer = {
  setMovies: (state, action) => {
    return { ...state, movies: action.movies };
  },
  deleteMovies: () => {},
};

export default moviesReducer;
