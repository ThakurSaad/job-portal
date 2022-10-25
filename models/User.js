const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough",
      },
    },

    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value == this.password;
        },
        message: "Passwords don't match!",
      },
    },

    name: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },

    companyName: String,

    companyDesc: String,

    role: {
      type: String,
      required: true,
      enum: ["candidate", "hiring-manager", "admin", "advisor"],
      default: "candidate",
    },

    contactNumber: {
      type: String,
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid contact number",
      },
    },

    presentAddress: String,

    permanentAddress: String,

    location: {
      type: String,
      required: [true, "Please provide your location"],
      lowercase: true,
    },

    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },

    nationalIdImageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },

    jobsApplied: [
      {
        type: ObjectId,
        ref: "Job",
      },
    ],

    jobsPosted: [
      {
        type: ObjectId,
        ref: "Job",
      },
    ],

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const password = this.password;
  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  this.password = hashedPassword;
  this.confirmPassword = undefined;

  next();
});

userSchema.methods.comparePassword = function async(password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
