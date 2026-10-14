// Step 1: The export statement should be fixed
export const getUserInfo = (user) => {
  return `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
};

// Step 3 fix the map method & fix duplicated method
export const formatSkills = function (skills) {
  return skills.map((skill) => skill.toUpperCase());
};

export const buildApiUrl = (parameters) => {
  const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  // Step 1 Add the parameters to the URL so the api is used properly
  for (const key in parameters) {
    apiUrl += `&${key}=${parameters[key]}`;
  }

  return apiUrl;
};
