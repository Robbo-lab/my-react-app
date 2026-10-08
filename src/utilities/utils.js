// Step 1: The export statement should be fixed
export const getUserInfo = (user) => {
  console.log("Get user info", user);
  return `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
};

// Step 3 fix the map method & fix duplicated method
export const formatSkills = function (skills) {
  console.log(skills);
  return skills.map((skill) => skill.toUpperCase());
};
