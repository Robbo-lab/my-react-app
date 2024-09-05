import React from "react";
import DateInputComponent from "./DateInput";
import ItemList from "./ItemList";
import Lifecycle from "./LifeCycle";
import StyledComponent from "./StyledComponent";
import UserProfile from "./UserProfile";

function MainContent() {
  // Store the date in a global variable (if needed)
  const handleDateChange = (newDate) => {
    window.date = newDate;
  };

  const items = [
    { id: 1, title: "First Item" },
    { id: 2, title: "Second Item" },
    { id: 3, title: "Third Item" },
  ];

  return (
    <div className="container">
      <section className="section">
        <div className="content">
          <h1 className="title">Welcome to My App</h1>
          <p>This is the main content area of the application.</p>
          <>
            <Lifecycle />
            <ItemList items={items} />
            <UserProfile />
            <UserProfile
              firstName="John"
              lastName="Doe"
              age={30}
              isStudent={false}
              skills={["JavaScript", "React", "CSS"]}
            />
            <StyledComponent />
            <DateInputComponent onDateChange={handleDateChange} />
          </>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
