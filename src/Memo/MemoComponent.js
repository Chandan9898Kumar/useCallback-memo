import React, { useState } from "react";
import Greeting from "./GreetingChild";
const MemoComponent = () => {
  // memo lets you skip re-rendering a component when its props are unchanged(Not changing).

  //                         Usages

  //    1. Skipping re-rendering when props are unchanged
  //    2. Updating a memoized component using state
  //    3. Updating a memoized component using a context
  //    4. Minimizing props changes
  //    5. Specifying a custom comparison function

  //                       Notes

  // React normally re-renders a component whenever its parent re-renders.
  // With memo, you can create a component that React will not re-render when its parent re-renders
  // so long as its new props are the same as the old props. Such a component is said to be 'memoized'.

  // To memoize a component, wrap it in a call to 'memo' and use the value that it returns in place of
  // your original component:

  // By using memo, you are telling React that your component complies with this requirement,
  // so React doesn’t need to re-render as long as its props haven’t changed. When you use memo,
  // your component will still re-render if its own state changes or if a context that it’s using changes.

  // Keep in mind that memo is completely useless if the props passed to your component
  // are always different, such as if you pass an object or a plain function defined
  // during rendering. This is why you will often need useMemo  and useCallback together with memo.

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // In this example, notice that the Greeting component re-renders
  // whenever name is changed (because that’s one of its props),
  // but not when address is changed (because it’s not passed to Greeting as a prop):
  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
};
export default MemoComponent;
