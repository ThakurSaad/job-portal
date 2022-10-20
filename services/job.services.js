const Job = require("../models/Job");

exports.createJobService = async (data) => {
  return await Job.create(data);
};

exports.getJobsService = async () => {
  return await Job.find({});
};
