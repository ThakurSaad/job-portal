const {
  getJobsService,
  getJobByIdService,
  applyJobService,
} = require("../services/candidate.services");

// exports.createJob = async (req, res) => {
//   try {
//     const job = await createJobService(req.body);

//     res.status(200).json({
//       status: "Success",
//       message: "Successfully posted job",
//       data: job,
//     });
//   } catch (error) {
//     console.log("error");

//     res.status(400).json({
//       status: "Fail",
//       message: "Can not post job",
//       error: error.message,
//     });
//   }
// };

exports.getJobs = async (req, res) => {
  try {
    let filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];

    excludeFields.forEach((field) => delete filters[field]);

    let filterString = JSON.stringify(filters);
    filterString = filterString.replace(
      /\b(gt|gte|lt|lte|eq)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filterString);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    const jobs = await getJobsService(filters, queries);

    res.status(200).json({
      status: "Success",
      message: "Jobs found",
      data: jobs,
    });
  } catch (error) {
    console.log("error");

    res.status(400).json({
      status: "Fail",
      message: "Jobs not found",
      error: error.message,
    });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await getJobByIdService(id);

    res.status(200).json({
      status: "Success",
      message: "Job found",
      data: job,
    });
  } catch (error) {
    console.log("error");

    res.status(400).json({
      status: "Fail",
      message: "Job not found",
      error: error.message,
    });
  }
};

exports.applyJob = async (req, res) => {
  try {
    const job = await applyJobService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Application successful",
      data: job,
    });
  } catch (error) {
    console.log("error");

    res.status(400).json({
      status: "Fail",
      message: "Application not sent",
      error: error.message,
    });
  }
};
