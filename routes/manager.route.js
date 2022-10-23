const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller");
const { verifyToken } = require("../middlewares/verifyToken");

router
  .route("/")
  .post(managerController.createJob)
  .get(verifyToken, managerController.getJobs);

router.get("/:id", managerController.getJobById);

module.exports = router;
