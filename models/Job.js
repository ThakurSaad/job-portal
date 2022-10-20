const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a job title"],
      minLength: [5, "Title must be at least 5 characters."],
      maxLength: [100, "Title is too large"],
      lowercase: true,
      trim: true,
    },

    companyName: {},

    companyDesc: {},

    jobType: {},

    jobDesc: {},

    jobField: {},

    jobLocation: {},

    skills: {},

    startDate: {},

    salary: {},

    unit: {},
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
