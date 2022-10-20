const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

const app = require("./app");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.magenta);
});
