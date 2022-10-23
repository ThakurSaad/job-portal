const {
  createJobService,
  getJobsService,
  getJobByIdService,
} = require("../services/manager.services");

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

exports.getJobs = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(req.user);
    const jobs = await getJobsService(id);

    res.status(200).json({
      status: "Success",
      message: "Jobs found",
      data: jobs,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: "Fail",
      message: "Jobs not found",
      error: error.message,
    });
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const job = await getJobByIdService(id);

    res.status(200).json({
      status: "Success",
      message: "Job found",
      data: job,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: "Fail",
      message: "Job not found for this id",
      error: error.message,
    });
  }
};
