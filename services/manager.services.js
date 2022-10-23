const Job = require("../models/Job");

exports.createJobService = async (data) => {
  return await Job.create(data);
};

exports.getJobsService = async (managerId) => {
  const jobs = await Job.find({ "hiringManager.id": managerId });
  const total = await Job.countDocuments({ "hiringManager.id": managerId });
  return { total, jobs };
};
