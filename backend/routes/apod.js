const express = require("express");
const router = express.Router();
const { fetchApod } = require("../services/nasaService");

router.get("/", async (req, res) => {
  try {
    const data = await fetchApod(req.query.date);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch APOD" });
  }
});

module.exports = router;
