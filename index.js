const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

const mongodbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v79k8ce.mongodb.net/job-portal?retryWrites=true&w=majority`;
// process.env.DATABASE_LOCAL

mongoose.connect(mongodbURI).then(() => {
  console.log(`Database is connected to a core Blink`.blue);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App's on BlackPink fan-sign event at port ${port}`.magenta);
});
