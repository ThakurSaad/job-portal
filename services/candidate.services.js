const Application = require("../models/Application");
const Job = require("../models/Job");

exports.getJobsService = async (filters, queries) => {
  const jobs = await Job.find(filters).sort(queries.sortBy);
  const total = await Job.countDocuments(filters);
  return { total, jobs };
};

exports.getJobByIdService = async (jobId) => {
  const job = await Job.findOne({ _id: jobId }).populate("hiringManager.id");
  return job;
};

exports.applyJobService = async (data) => {
  const foundApplication = await Application.findOne({
    candidateEmail: data.candidateEmail,
    jobId: data.jobId,
  });

  // prevent if applied jobId from client, matches with jobId from DB
  if (foundApplication && foundApplication?.jobId == data.jobId) {
    return null;
  } else {
    const application = await Application.create(data);

    const { _id: jobId, job } = application;

    await Job.updateOne({ _id: job.id }, { $push: { candidates: jobId } });

    return application;
  }
};
