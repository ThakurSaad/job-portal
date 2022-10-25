const Job = require("../models/Job");

exports.createJobService = async (data) => {
  return await Job.create(data);
};

exports.getJobsService = async (managerInfo) => {
  const { _id: managerId } = managerInfo;
  const jobs = await Job.find({ "hiringManager.id": managerId });
  const total = await Job.countDocuments({ "hiringManager.id": managerId });
  return { total, jobs };
};

exports.getJobByIdService = async (jobId) => {
  const job = await Job.findOne({ _id: jobId }).populate("candidates");
  return job;
};

exports.updateJobByIdService = async (jobId, data) => {
  const result = await Job.updateOne({ _id: jobId }, data);
  return result;
};
