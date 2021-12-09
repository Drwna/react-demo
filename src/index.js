import React from "react";
import ReactDOM from "react-dom";
import useList from "./hooks/useList";

function App() {
  const { list } = useList();
  return (
    <div className="App">
      <h1>hook</h1>
      <hr />
      <h2>List</h2>
      {list ? (
        <ol>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
