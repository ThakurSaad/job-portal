const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const applicationSchema = mongoose.Schema({
  candidateName: {
    type: String,
    lowerCase: true,
    trim: true,
    required: [true, "Please provide your name"],
  },

  candidateEmail: {
    type: String,
    required: [true, "Please provide an email"],
    validate: [validator.isEmail, "Please provide a valid email"],
    trim: true,
    lowercase: true,
    unique: true,
  },

  jobTitle: {
    type: String,
    trim: true,
    required: true,
  },

  jobId: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
