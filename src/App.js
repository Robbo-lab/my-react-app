import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// import DateInputComponent from "./components/DateInput";
// import ItemList from "./components/ItemList";
// import Lifecycle from "./components/LifeCycle";
// import StyledComponent from "./components/StyledComponent";
// import UserProfile from "./components/UserProfile";

const App = () => {
  // const handleDateChange = (newDate) => {
  //   window.date = newDate; // Store the date in a global variable (if needed)
  // };

  // const items = [
  //   { id: 1, title: "First Item" },
  //   { id: 2, title: "Second Item" },
  //   { id: 3, title: "Third Item" },
  // ];

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      {/* //   <Lifecycle />
    //   <ItemList items={items} />
    //   <UserProfile />
    //   <UserProfile
    //     firstName="John"
    //     lastName="Doe"
    //     age={30}
    //     isStudent={false}
    //     skills={["JavaScript", "React", "CSS"]}
    //   />
    //   <StyledComponent />
    //   <DateInputComponent onDateChange={handleDateChange} /> */}
    </>
  );
};

export default App;
