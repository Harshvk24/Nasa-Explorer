const express = require("express");
const router = express.Router();
const { fetchEpicImages } = require("../services/nasaService");

router.get("/", async (req, res) => {
  try {
    const data = await fetchEpicImages();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch EPIC images" });
  }
});

module.exports = router;
