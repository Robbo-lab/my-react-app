import React, { useState } from "react";
import SecondComponent from "./components/SecondComponent";
import FourthComponent from "./components/FourthComponent";

const DrillingApp = () => {
  // Consider our complex UserObject here!!!
  const [userName, setUserName] = useState("Yusho");

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <SecondComponent userName={userName} />
      <FourthComponent />
    </div>
  );
};

export default DrillingApp;
