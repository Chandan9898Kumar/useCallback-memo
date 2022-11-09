import React, { useState, useCallback } from "react";
import Childs from "../UseCallBack/Child";

const Parents = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Here if we are hitting Increase function to increase the count,then child component
  // is also being called unnecessarly.(check console in child component)
  const Increse = () => {
    setCount((prev) => prev + 1);
  };

  // Instead using this directly use, useCallback  hook here.
  // const AddToDo = (data) => {
  //   setTodos([...todos, data]);
  // };

  // Now the Todos component will only re-render when the todos prop changes.
  const AddToDo = useCallback(
    (data) => {
      // setTodos([...todos, data]);
      //         OR

      setTodos((prev) => [...prev, data]);
    },
    [todos]
    // we  can remove todos dependency  beacuse we passed an  updater function.ex [] .
  );

  // To see impacts,just remove useCallback and get the difference.

  // One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
  // here Childs component are having todos and AddToDo as props. if these are changing then only Childs component
  // will render. we have constrained these two props to Child only by useCallback Hook.
  // note : if we put other props like count in Child component then when the count changes it will affect Child
  // component and it will make Child component to re-render. so to stop it again we have to use usecallback on Count.
  return (
    <>
      Count : {count}
      <br />
      <button onClick={() => Increse()}>Add</button>
      <br />
      <hr />
      <br />
      <Childs todos={todos} AddToDoList={AddToDo} />
      <br />
    </>
  );
};
export default Parents;