// backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Route imports
app.use("/apod", require("./routes/apod"));
app.use("/mars", require("./routes/mars"));
app.use("/epic", require("./routes/epic"));
app.use("/neo", require("./routes/neo"));
app.use("/search", require("./routes/search"));

module.exports = app;
