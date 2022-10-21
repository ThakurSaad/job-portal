const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate.controller");

router.get("/", candidateController.getJobs);

// router.get("/", candidateController.getJobsById)

module.exports = router;
