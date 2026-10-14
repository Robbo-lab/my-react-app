import React from "react";
import ThirdComponent from "./ThirdComponent";

// Uncomment these lines on we have context setup using ContextApp
const SecondComponent = () => {
    return (
    <div>
      <h2>Second Component</h2>
      {/* <ThirdComponent userName={userName} /> */}
      <ThirdComponent />
    </div>
  );
};

export default SecondComponent;
