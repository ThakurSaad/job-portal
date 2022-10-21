const Job = require("../models/Job");

// exports.createJobService = async (data) => {
//   return await Job.create(data);
// };

exports.getJobsService = async () => {
  const jobs = await Job.find({}).select("-candidates");
  const total = await Job.countDocuments();
  return { total, jobs };
};
