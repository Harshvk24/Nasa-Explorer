const express = require("express");
const router = express.Router();
const { fetchNeoData } = require("../services/nasaService");

router.get("/", async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const data = await fetchNeoData(start_date, end_date);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch NEO data" });
  }
});

module.exports = router;
