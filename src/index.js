import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

const initial = {
  n: 1,
};

const reducer = (state, action) => {
  if (action.type === "add") {
    return { n: state.n + action.number };
  } else if (action.type === "multiply") {
    return { n: state.n * 2 };
  } else {
    throw new Error("unknown type");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const { n } = state;
  const onClick = () => {
    dispatch({ type: "add", number: 1 });
  };
  const onClick2 = () => {
    dispatch({ type: "add", number: 2 });
  };
  return (
    <div>
      <h1>n: {n}</h1>
      <button onClick={onClick}> + 1</button>
      <button onClick={onClick2}> + 2</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
