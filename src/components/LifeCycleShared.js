import React, { useState, useEffect } from "react";

function LifeCycleShared() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated:", count);

    return () => {
      console.log("[Cleanup before next effect or unmount] count was:", count);
    };
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <h1 className="title has-text-centered">Lifecycle Monitor</h1>
          <div className="columns">
            <div className="column">
              <CounterDisplay count={count} />
            </div>
            <div className="column">
              <CounterControls
                count={count}
                onIncrement={increment}
                onDecrement={decrement}
              />
            </div>
          </div>
          <CounterLogger count={count} />
        </div>
      </div>
    </section>
  );
}

function CounterDisplay({ count }) {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <p className="heading">Current Count</p>
        <p className="title is-1 has-text-primary">{count}</p>
      </div>
    </div>
  );
}

function CounterControls({ count, onIncrement, onDecrement }) {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <p className="title is-5">Controls</p>

        <div className="buttons is-centered">
          <button
            className="button is-danger"
            onClick={onDecrement}
            disabled={count === 0}
          >
            −
          </button>

          <button className="button is-success" onClick={onIncrement}>
            +
          </button>
        </div>

        <div className="notification is-light mt-4">
          Shared Count: <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}

function CounterLogger({ count }) {
  useEffect(() => {
    console.log("[CounterLogger] count changed to", count);
  }, [count]);

  return (
    <div className="notification is-info is-light mt-5">
      <strong>CounterLogger</strong> is listening for state changes. Open the
      browser console to see the useEffect logs.
    </div>
  );
}

export default LifeCycleShared;
