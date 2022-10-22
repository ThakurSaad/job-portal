const { createJobService } = require("../services/manager.services");

exports.createJob = async (req, res) => {
  try {
    const job = await createJobService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully posted job",
      data: job,
    });
  } catch (error) {
    console.log("error");

    res.status(400).json({
      status: "Fail",
      message: "Can not post job",
      error: error.message,
    });
  }
};

exports.getJobs = async (req, res, next) => {};
exports.getJobById = async (req, res, next) => {};
