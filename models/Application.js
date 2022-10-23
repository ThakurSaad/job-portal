const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const applicationSchema = mongoose.Schema(
  {
    candidateName: {
      type: String,
      trim: true,
      required: [true, "Please provide your name"],
    },

    candidateEmail: {
      type: String,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      required: [true, "Please provide an email"],
    },

    jobId: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
      required: [true, "Please provide your contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid contact number",
      },
    },

    presentAddress: {
      type: String,
      required: [true, "Please provide present address"],
    },

    permanentAddress: {
      type: String,
      required: [true, "Please provide permanent address"],
    },

    location: {
      type: String,
      required: [true, "Please provide your location"],
      lowercase: true,
    },

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
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
