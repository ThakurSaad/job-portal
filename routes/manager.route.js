const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/jobs", managerController.createJob);

router.patch("/jobs/:id", managerController.updateJobById);

router.get("/manager/jobs", verifyToken, managerController.getJobs);

router.get("/manager/jobs/:id", managerController.getJobById);

module.exports = router;
