import React, { useImperativeHandle, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";

const Children = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    name: "子组件暴露给父组件的 name 属性",
    focus: () => {
      inputRef.current && inputRef.current.focus();
    },
  }));
  return (
    <>
      <input type="text" ref={inputRef} />
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
