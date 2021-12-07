import React, { forwardRef, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const MovableButton = movable(Button2);
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("buttonRef.current: ", buttonRef.current);
  });
  return (
    <div className="App">
      <MovableButton name="email" ref={buttonRef}>
        按钮
      </MovableButton>
    </div>
  );
}

// 原地址: https://codesandbox.io/s/amazing-snow-9f5g3

const Button2 = forwardRef((props, ref) => {
  return <button ref={ref} {...props} />;
});

// 仅用于实验目的，不要在公司代码中使用
function movable(Component) {
  function Component2(props, ref) {
    console.log(props, ref);
    const [position, setPosition] = useState([0, 0]);
    const lastPosition = useRef(null);
    const onMouseDown = (e) => {
      lastPosition.current = [e.clientX, e.clientY];
    };
    const onMouseMove = (e) => {
      if (lastPosition.current) {
        const x = e.clientX - lastPosition.current[0];
        const y = e.clientY - lastPosition.current[1];
        setPosition([position[0] + x, position[1] + y]);
        lastPosition.current = [e.clientX, e.clientY];
      }
    };
    const onMouseUp = () => {
      lastPosition.current = null;
    };
    return (
      <div
        className="movable"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        style={{ left: position && position[0], top: position && position[1] }}
      >
        <Component {...props} ref={ref} />
      </div>
    );
  }
  return React.forwardRef(Component2);
}

ReactDOM.render(<App />, document.getElementById("root"));
