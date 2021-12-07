import React, { forwardRef, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonRef = useRef(null);
  console.log("buttonRef", buttonRef);
  return (
    <div>
      <h1>React.forwardRef</h1>
      <hr />
      <div>
        <Button3 ref={buttonRef}>button</Button3>
      </div>
    </div>
  );
};

const Button2 = (props, ref) => {
  console.log(props);
  console.log(ref);
  return <button className="red" ref={ref} {...props} />;
};

const Button3 = forwardRef(Button2);

// const Button4 = forwardRef((props, ref) => {
//   console.log(props);
//   console.log(ref);
//   return <button className="red" ref={ref} {...props} />;
// });

ReactDOM.render(<App />, document.getElementById("root"));
