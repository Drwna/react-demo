import { useEffect, useState } from "react";

const useList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    ajax("/list").then((list) => {
      setList(list);
    });
  }, []); // [] 确保只在第一次运行
  return {
    list: list,
    setList: setList,
  };
};

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "frank" },
        { id: 2, name: "javascript" },
        { id: 3, name: "react" },
        { id: 4, name: "vue" },
      ]);
    }, 2000);
  });
}

export default useList;
