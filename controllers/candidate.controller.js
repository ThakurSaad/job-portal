const { getJobsService } = require("../services/candidate.services");

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

    console.log(filters);

    const jobs = await getJobsService();

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
