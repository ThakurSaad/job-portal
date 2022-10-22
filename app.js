const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

//routes
const candidateRoute = require("./routes/candidate.route");
const managerRoute = require("./routes/manager.route");

app.use("/api/v1/candidate/jobs", candidateRoute);
app.use("/api/v1/manager/jobs", managerRoute);

app.get("/", (req, res) => {
  res.send("Route is high");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
