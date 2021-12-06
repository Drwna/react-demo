import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react/cjs/react.development";

// 需要知道 App 执行了几次
const App = () => {
  console.log("App执行了");
  const count = useRef(0);
  const [n, setN] = useState(0);
  const onClick = () => {
    setN((i) => i + 1);
  };
  useEffect(() => {
    count.current += 1;
    console.log("App执行了", count.current, "次");
  });
  return (
    <div>
      <h1>React.useRef</h1>
      <hr />
      <div>
        <button onClick={onClick}>update n :{n}</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
