import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(0);
  // const onClick = () => {
  //   setN((i) => i + 1);
  // };
  useLayoutEffect(() => {
    document.querySelector("#x").innerText = "value: 999";
  }, [value]);
  return (
    <div
      id="x"
      onClick={() => {
        setValue(0);
      }}
    >
      value:{value}
    </div>
    // <div>
    //   <h1>useEffect</h1>
    //   <hr />
    //   n:{n}
    //   <button onClick={onClick}>点击+1</button>
    // </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
