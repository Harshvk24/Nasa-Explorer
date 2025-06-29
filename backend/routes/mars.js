const express = require("express");
const router = express.Router();
const { fetchMarsPhotos } = require("../services/nasaService");
const { fetchMarsWeather } = require("../services/nasaService");

router.get("/", async (req, res) => {
  try {
    const { rover = "curiosity", sol = 1000, camera } = req.query;
    const data = await fetchMarsPhotos(rover, sol, camera);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Mars rover photos" });
  }
});

router.get("/weather", async (req, res) => {
  try {
    const data = await fetchMarsWeather();
    const latestSol = data.sol_keys[data.sol_keys.length - 1];
    const weather = data[latestSol];

    res.json({
      sol: latestSol,
      season: weather.Season,
      min_temp: weather.AT?.mn,
      max_temp: weather.AT?.mx,
      avg_temp: weather.AT?.av,
    });
  } catch (err) {
    console.error("Mars weather error:", err.message);
    res.status(500).json({ error: "Failed to fetch Mars weather" });
  }
});

module.exports = router;
