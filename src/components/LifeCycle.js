import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // useEffect for componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted");
    console.log("Component updated");

    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Lifecycle Monitor</h2>
      <p>Count: {count}</p>
      <button className="button is-danger is-light" onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
}

export default Lifecycle;
