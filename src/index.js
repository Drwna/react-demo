import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [n, setN] = useState(0);
  const onClick = () => {
    setN((i) => i + 1);
  };
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("hi");
  //   }, 2000);
  //   return () => {
  //     window.clearInterval(id);
  //   };
  // });
  useEffect(() => {
    console.log("第一次渲染后执行这句话");
  }, []); // [] 里面的变量变化时执行 --> 不会执行
  useEffect(() => {
    console.log("n变化了");
  }, [n]); // n 变化时执行
  useEffect(() => {
    console.log("任何一个 state 变化时都执行");
  });
  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      n:{n}
      <button onClick={onClick}>点击+1</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));