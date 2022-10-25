const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/jobs", verifyToken, managerController.createJob);

router.patch("/jobs/:id", verifyToken, managerController.updateJobById);

router.get("/manager/jobs", verifyToken, managerController.getJobs);

router.get("/manager/jobs/:id", verifyToken, managerController.getJobById);

module.exports = router;
