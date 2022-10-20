const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

//routes
const jobRoute = require("./routes/job.route");

app.use("/api/v1/job", jobRoute);

app.get("/", (req, res) => {
  res.send("Route is high");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
