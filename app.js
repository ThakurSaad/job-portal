const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

//routes
const candidateRoute = require("./routes/candidate.route");
const managerRoute = require("./routes/manager.route");
const userRoute = require("./routes/user.route");

app.use("/api/v1", candidateRoute);
app.use("/api/v1", managerRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Route is high");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
