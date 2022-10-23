const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller");

router.post("/", managerController.createJob);

router.get("/", managerController.getJobs);

// router.get("/:id", managerController.getJobById);

module.exports = router;
