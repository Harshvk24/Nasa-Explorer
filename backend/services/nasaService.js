const axios = require("axios");
const API_KEY = process.env.NASA_API_KEY;

const safeGet = async (url, params) => {
  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (err) {
    console.error(`Error fetching from ${url}:`, err.message);
    throw new Error("NASA API request failed.");
  }
};

const fetchApod = (date) =>
  safeGet("https://api.nasa.gov/planetary/apod", {
    api_key: API_KEY,
    date: date || undefined,
  });

const fetchMarsPhotos = (rover = "curiosity", sol = 1000, camera) =>
  safeGet(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`, {
    api_key: API_KEY,
    sol,
    camera,
  });

const fetchMarsWeather = () =>
  safeGet("https://api.nasa.gov/insight_weather/", {
    api_key: API_KEY,
    feedtype: "json",
    ver: "1.0",
  });

const fetchEpicImages = () =>
  safeGet("https://api.nasa.gov/EPIC/api/natural/image", {
    api_key: API_KEY,
  });

const fetchNeoData = (start_date, end_date) =>
  safeGet("https://api.nasa.gov/neo/rest/v1/feed", {
    api_key: API_KEY,
    start_date,
    end_date,
  });

const searchMedia = (query) => safeGet("https://images-api.nasa.gov/search", { q: query });

module.exports = {
  fetchApod,
  fetchMarsPhotos,
  fetchEpicImages,
  fetchNeoData,
  searchMedia,
  fetchMarsWeather,
};
