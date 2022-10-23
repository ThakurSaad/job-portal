const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const applicationSchema = mongoose.Schema(
  {
    job: {
      title: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Job",
      },
    },

    jobId: {
      type: String,
      required: true,
    },

    candidateName: {
      type: String,
      lowerCase: true,
      trim: true,
      required: [true, "Please provide your name"],
    },

    candidateEmail: {
      type: String,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      required: [true, "Please provide an email"],
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
