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

    candidateName: {
      type: String,
      lowerCase: true,
      trim: true,
      required: [true, "Please provide your name"],
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
