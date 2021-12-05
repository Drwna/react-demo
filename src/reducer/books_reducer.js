const booksReducer = {
  setBook: (state, action) => {
    return { ...state, books: action.books };
  },
  deleteBook: () => {},
};

export default booksReducer;
