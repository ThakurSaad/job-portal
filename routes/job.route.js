const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

router.route("/").post(jobController.createJob).get(jobController.getJobs);

module.exports = router;
