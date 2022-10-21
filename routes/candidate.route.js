const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate.controller");

router.get("/", candidateController.getJobs);

module.exports = router;
