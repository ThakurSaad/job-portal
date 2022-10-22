const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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

    companyName: {
      type: String,
      required: [true, "Please provide a company name"],
    },

    companyDesc: {
      type: String,
      required: [true, "Please provide a company description"],
    },

    jobType: {
      type: String,
      required: [true, "Please provide a job type"],
      enum: {
        values: ["on-site", "remote", "hybrid"],
        message: "Job type can not be {VALUE}, must be on-site/remote/hybrid",
      },
    },

    jobDesc: {
      type: String,
      required: [true, "Please provide a job description"],
    },

    jobField: {
      type: String,
      required: [true, "Please provide a job field"],
      enum: {
        values: [
          "engineering",
          "digital-marketing",
          "designing",
          "accounting",
          "art",
        ],
        message:
          "Job field can not be {VALUE}. Must be art/accounting/designing/digital-marketing/engineering",
      },
    },

    jobLocation: {
      type: String,
      required: [true, "Please provide a job location"],
    },

    skills: {
      type: String,
      required: [true, "Please provide skills needed for this job"],
    },

    startDate: {
      type: String,
      required: [true, "Please provide starting date"],
    },

    salary: {
      type: String,
      required: [true, "Please provide salary"],
    },

    unit: {
      type: String,
      required: [true, "Please provide a currency for salary"],
      enum: {
        values: [
          "$",
          "USD",
          "€",
          "Euro",
          "৳",
          "BDT",
          "₹",
          "Rupee",
          "¥",
          "Yen",
          "₩",
          "Won",
        ],
        message:
          "Unit value can not be '{VALUE}', must be $, USD, €, Euro, ৳, BDT, ₹, Rupee, ¥, Yen, ₩, Won",
      },
    },

    deadline: {
      type: String,
      required: [true, "Please provide application deadline"],
    },

    vacancy: {
      type: Number,
      required: [true, "Please provide number of vacancies"],
    },

    candidates: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],

    hiringManager: {
      name: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
