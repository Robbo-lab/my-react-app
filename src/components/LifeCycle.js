//Set break points where you lose the code
import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(["anything"]);

  useEffect(() => {
    return () => {
      // console.log("Component will unmount");
    };
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Lifecycle Monitor</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Lifecycle;
