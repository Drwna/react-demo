import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

const Children = forwardRef((props, cref) => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const inputRef = useRef(null);

  useImperativeHandle(
    cref,
    () => ({
      name: "子组件暴露给父组件的 name 属性",
      focus: () => {
        inputRef.current && inputRef.current.focus();
      },
      count,
    }),
    [num]
  );
  /*
先点击setCount按钮加到7，然后点击“获取子组件暴露给父组件的东西”按钮，
此时打印出的count还是初使状态的0，只有点击了setNum按钮，（也就是说当num发生改变当时候），
再次点击“获取子组件暴露给父组件的东西”按钮，此时打印出的count为改变后的7
*/
  return (
    <>
      <h3>count: {count}</h3>
      <h3>num: {num}</h3>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        setCount
      </button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        setCount
      </button>
    </>
  );
});

const Parent = () => {
  const el = useRef(null);
  return (
    <>
      <Children ref={el} />
      <button
        onClick={() => {
          console.log(el.current);
        }}
      >
        获取子组件暴露给父组件的东西
      </button>
    </>
  );
};

function App() {
  return <Parent />;
}

ReactDOM.render(<App />, document.getElementById("root"));
