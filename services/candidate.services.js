const Application = require("../models/Application");
const Job = require("../models/Job");

// exports.createJobService = async (data) => {
//   return await Job.create(data);
// };

exports.getJobsService = async (filters, queries) => {
  const jobs = await Job.find(filters).sort(queries.sortBy);
  const total = await Job.countDocuments(filters);
  return { total, jobs };
};

exports.getJobByIdService = async (jobId) => {
  return await Job.findOne({ _id: jobId });
};

exports.applyJobService = async (data) => {
  return await Application.create(data);
};
