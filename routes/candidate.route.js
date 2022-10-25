const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate.controller");

router.get("/jobs", candidateController.getJobs);

router.get("/jobs/:id", candidateController.getJobById);

router.post("/jobs/:id/apply", candidateController.applyJob);

module.exports = router;
