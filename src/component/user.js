import React, { useContext, useEffect } from "react";
import Context from "../Context.js";
import ajax from "../ajax.js";

const User = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/user").then((user) => {
      dispatch({ type: "setUser", user });
    });
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ""}</div>
    </div>
  );
};

export default User;
