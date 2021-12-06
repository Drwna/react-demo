import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react/cjs/react.development";

// 需要知道 App 执行了几次
const App = () => {
  console.log("App执行了");
  const count = useRef(0);
  const [n, setN] = useState(0);
  const [_, set_] = useState(null);
  const onClick = () => {
    setN((i) => i + 1);
  };
  const onClick2 = () => {
    count.current += 1;
    // 为了更新 ui
    set_(Math.random());
    console.log(count.current);
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
        <button onClick={onClick2}>update count:{count.current}</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
