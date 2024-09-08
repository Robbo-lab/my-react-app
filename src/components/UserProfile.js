// file: UserProfile.js
import React from "react";
import { getUserInfo, formatSkills } from "../utils/utils"; // Correctly import the utility methods
import DefaultAvatar from "../assets/images/avatar_2.png";

function UserProfile(props) {
  console.log(props);
  // Step 2 create the object correctly using props
  const user = {
    firstName: props.firstName || "Default FirstName",
    lastName: props.lastName || "Default Last Name",
    imageUrl: props.imageUrl || DefaultAvatar,
    age: props.age || 0,
    isStudent: props.isStudent !== undefined ? props.isStudent : false,
    skills: props.skills || ["JavaScript", "React", "CSS"],
  };

  // Step 3 use formatSkills utility function to format skills
  const formattedSkills = formatSkills(user.skills);

  // Step 4 destructure props at the top of the component
  const { firstName, lastName, imageUrl, age, isStudent, skills } = props;

  // Step 5 fix the ternary operator
  const greetingMessage = `Hello, ${firstName ? firstName : "Guest"}!`;

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div className="container">
      <div className="section">
        {" "}
        <figure className="image is-128x128">
          <img
            src={imageUrl ? imageUrl : DefaultAvatar}
            alt="My Avatar"
            className="is-rounded"
          />
        </figure>
        <h2 className="title">User Profile</h2>{" "}
        <p className="subtitle">{greetingMessage}</p> <p>{userInfo}</p>
        <p>Status: {age > 18 ? "Adult" : "Minor"}</p>
        {/* Skills with a badge-like appearance */}
        <p>
          Skills:{" "}
          {formattedSkills.map((skill, index) => (
            <span key={index} className="tag is-info is-light">
              {skill}
              {""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
