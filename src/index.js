import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import Context from "./Context.js";
import User from "./component/user.js";
import Books from "./component/books.js";
import Movies from "./component/movies.js";
import userReducer from "./reducer/user_reducer.js";
import booksReducer from "./reducer/books_reducer.js";
import moviesReducer from "./reducer/movies_reducer.js";

const store = {
  user: null,
  books: null,
  movies: null,
};

const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
};

function reducer(state, action) {
  const fn = obj[action.type];
  if (fn) {
    return fn(state, action);
  } else {
    console.error("wrong type");
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "setUser":
//       return { ...state, user: action.user };
//     case "setBooks":
//       return { ...state, books: action.books };
//     case "setMovies":
//       return { ...state, movies: action.movies };
//     default:
//       throw new Error();
//   }
// }


const App = () => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
