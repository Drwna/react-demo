import React, { createContext, useContext, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

const store = {
  user: null,
  books: null,
  movies: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
    case "setBooks":
      return { ...state, books: action.books };
    case "setMovies":
      return { ...state, movies: action.movies };
    default:
      throw new Error();
  }
};

const Context = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <hr />
      <Movies />
    </Context.Provider>
  );
};
const User = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/user").then((user) => {
      dispatch({ type: "setUser", user });
    });
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ""}</div>
    </div>
  );
};

const Books = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/books").then((books) => {
      dispatch({ type: "setBooks", books });
    });
  }, []);
  return (
    <div>
      <h1>我的书籍</h1>
      <ol>
        {state.books
          ? state.books.map((book) => <li key={book.id}>{book.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
};

const Movies = () => {
  const { state, dispatch } = useContext(Context);
  ajax("/movies").then((movies) => {
    dispatch({ type: "setMovies", movies });
  });
  return (
    <div>
      <h1>我的电影</h1>
      <ol>
        {state.movies
          ? state.movies.map((movies) => <li key={movies.id}>{movies.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
};

// 帮助函数
// 假 ajax
// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "frank",
        });
      } else if (path === "/books") {
        resolve([
          {
            id: 1,
            name: "JavaScript 高级程序设计",
          },
          {
            id: 2,
            name: "你不知道的 JavaScript",
          },
        ]);
      } else if (path === "/movies") {
        resolve([
          {
            id: 1,
            name: "卧虎藏龙",
          },
          {
            id: 2,
            name: "绿里奇迹",
          },
        ]);
      }
    }, 2000);
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
