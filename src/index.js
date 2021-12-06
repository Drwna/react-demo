import React, { memo, useMemo, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("App执行了");
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClick = () => {
    setN((i) => i + 1);
  };
  // 这句重新执行了
  const onClickChild = () => {};
  // 改为 2
  const onClickChild2 = useMemo(() => {
    return () => {};
  }, [m]);
  return (
    <div>
      <h1>React.memo</h1>
      <hr />
      <div>
        <button onClick={onClick}>update n :{n}</button>
        <Child2 data={m} onClick={onClickChild2} />
      </div>
    </div>
  );
};

function Child(prop) {
  console.log("child 执行了");
  console.log("假设这里还有大量代码");
  return <div>child m: {prop.data} </div>;
}
const Child2 = memo(Child);

ReactDOM.render(<App />, document.getElementById("root"));
