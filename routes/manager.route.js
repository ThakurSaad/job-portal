const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller");

router
  .route("/")
  .post(managerController.createJob)
  .get(managerController.getJobs);

router.get("/:id", managerController.getJobById);

module.exports = router;
