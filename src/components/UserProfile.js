// file: UserProfile.js
import React from "react";
import { getUserInfo, formatSkills } from "../utilities/utils"; // Correctly import the utility methods

function UserProfile(props) {
  // Step 2 create the object correctly using props
  // console.log("Just inside the UP component", props);

  console.log(props);
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
  const { firstName, age } = props.user;

  console.log(props);

  // Step 5 fix the ternary operator
  const greetingMessage = `Hello, ${firstName ? firstName : "Guest"}!`;

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div className="container mt-5">
      <div className="card">
        <header className="card-header has-background-secondary">
          <h1 className="card-header-title has-text-white">User Profile</h1>
        </header>
        <div className="card-content">
          <div className="notification is-primary is-light">
            <p className="subtitle is-5">{greetingMessage}</p>
          </div>
          <div className="content">
            <p>{userInfo}</p>
            <p>
              <strong>Age:</strong>{" "}
              <span className={`tag ${age > 18 ? "is-success" : "is-warning"}`}>
                {age > 18 ? "Adult" : "Minor"}
              </span>
            </p>
            <div className="mt-4">
              <p>
                <strong>Skills:</strong>
              </p>
              <div className="tags">
                {formattedSkills.map((skill, index) => (
                  <span key={index} className="tag is-info is-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
