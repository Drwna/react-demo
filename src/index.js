import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useEffect,
  createRef,
} from "react";
import ReactDOM from "react-dom";

const Button2 = forwardRef((props, ref) => {
  const realButton = createRef(null);
  const setRef = useImperativeHandle;
  setRef(ref, () => {
    return {
      x: () => {
        realButton.current.remove();
      },
    };
  });
  // useImperativeHandle(ref, () => {
  //   return {
  //     x: () => {
  //       realButton.current.remove();
  //     },
  //   };
  // });
  return <button ref={realButton} {...props}></button>;
});

function App() {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(buttonRef.current);
  });
  return (
    <div className="App">
      <Button2 ref={buttonRef}>button</Button2>
      <button
        className="close"
        onClick={() => {
          console.log(buttonRef);
          buttonRef.current.x();
        }}
      >
        X
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
