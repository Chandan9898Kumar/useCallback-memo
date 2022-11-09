import React from "react";
import { memo } from "react";
const Childs = ({ todos, AddToDoList }) => {
  const name = "Hello";
  console.log("Child Rendering");
  // You will notice that the Todos component re-renders even when the todos do not change.

  // Why does this not work? We are using memo, so the Todos component
  // should not re-render since neither the todos state nor the addTodo function
  // are changing when the count is incremented.

  // This is because of something called "referential equality".

  // Every time a component re-renders, its functions get recreated.
  // Because of this, the addTodo function has actually changed.

  // To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

  //         useCallback  Hook
  // Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:
  // The useCallback Hook only runs when one of its dependencies update.

  // The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
  return (
    <>
      <label>Child Component</label>
      <br />
      <button onClick={() => AddToDoList(name)}>Add Item</button>

      {todos.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
};

// export default Childs;
//    to skip re-rendering when its props are the same as on last render by wrapping it in memo.

// memo lets you skip re-rendering a component when its props are unchanged.
export default memo(Childs);

//                  Notes

// when a component re-renders, every function inside of the component is recreated and therefore these
// functions’ references change between renders.

// useCallback(callback, dependencies) will return a memoized instance of the callback that only changes
// if one of the dependencies has changed. This means that instead of recreating
// the function object on every re-render, we can use the same function object between renders.
