// file: UserProfile.js
import React from "react";
import { getUserInfo, formatSkills } from "../utils/utils"; // Correctly import the utility methods

function UserProfile(props) {
  // Step 2 create the object correctly using props
  // console.log("Just inside the UP component", props);
  const user = {
    firstName: props.user.firstName || "John",
    lastName: props.user.lastName || "Doe",
    age: props.user.age || 30,
    isStudent:
      props.user.isStudent !== undefined ? props.user.isStudent : false,
    skills: props.user.skills || ["JavaScript", "React", "CSS"],
  };

  // Step 3 use formatSkills utility function to format skills
  const formattedSkills = formatSkills(user.skills);

  // Step 4 destructure props at the top of the component
  // console.log("Before destructure", props.user);
  const { firstName, lastName, age, isStudent, skills, changeAge } = props.user;

  console.log("Destructure Props", [
    firstName,
    lastName,
    age,
    isStudent,
    skills,
  ]);

  // Step 5 fix the ternary operator
  const greetingMessage = `Hello, ${firstName ? firstName : "Guest"}!`;

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div className="container notification is-primary">
      <h1>User Profile</h1>
      <p>{greetingMessage}</p>
      <p>{userInfo}</p>
      <p>Age: {age > 18 ? "Adult" : "Minor"}</p>
      <p>Skills: {formattedSkills.join(", ")}</p>{" "}
    </div>
  );
}

export default UserProfile;
