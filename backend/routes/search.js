const express = require("express");
const router = express.Router();
const { searchMedia } = require("../services/nasaService");

router.get("/", async (req, res) => {
  try {
    const { q } = req.query;
    const data = await searchMedia(q);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to search NASA media" });
  }
});

module.exports = router;
