import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import ReactDOM from "react-dom";

// 子组件
const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0); //子组件定义内部变量count
  //子组件定义内部函数 addCount
  const addCount = () => {
    setCount(count + 1);
  };
  //子组件通过useImperativeHandle函数，将addCount函数添加到父组件中的ref.current中
  useImperativeHandle(ref, () => ({ addCount }));
  return (
    <div>
      {count}
      <button onClick={addCount}>child</button>
    </div>
  );
});

// 父组件
function Imperative() {
  const childRef = useRef(null); //父组件定义一个对子组件的引用

  const clickHandle = () => {
    childRef.current.addCount(); //父组件调用子组件内部 addCount函数
  };

  return (
    <div>
      {/* 父组件通过给子组件添加 ref 属性，将childRef传递给子组件，
            子组件获得该引用即可将内部函数添加到childRef中 */}
      <ChildComponent ref={childRef} />
      <button onClick={clickHandle}>child component do something</button>
    </div>
  );
}

function App() {
  return <Imperative />;
}

ReactDOM.render(<App />, document.getElementById("root"));
