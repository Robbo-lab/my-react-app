export const buildApiUrl = (parameters) => {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    throw new Error("API key is missing! Make sure NASA_API_KEY is set.");
  }

  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  for (const key in parameters) {
    apiUrl += `&${key}=${parameters[key]}`;
  }
  return apiUrl;
};
