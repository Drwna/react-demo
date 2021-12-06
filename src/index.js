import React, { memo, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClick = () => {
    setN((i) => i + 1);
  };
  const onClick2 = () => {
    setM((i) => i + 1);
  };
  return (
    <div>
      <h1>React.memo</h1>
      <hr />
      <div>
        <button onClick={onClick}>update n :{n}</button>
        <Child data={m} />
        {/* <Child2 data={m} /> */}
        <button onClick={onClick2}>update m :{m}</button>
      </div>
    </div>
  );
};

// function Child(prop) {
//   console.log("child 执行了");
//   console.log("假设这里还有大量代码");
//   return <div>child m: {prop.data} </div>;
// }
// const Child2 = memo(Child);

const Child = memo((props) => {
  console.log("child 执行了");
  console.log("假设这里还有大量代码");
  return <div>child m: {props.data} </div>;
});

ReactDOM.render(<App />, document.getElementById("root"));
