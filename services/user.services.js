const User = require("../models/User");

exports.signUpService = async (userInfo) => {
  return await User.create(userInfo);
};

exports.findUserByEmailService = async (email) => {
  return await User.findOne({ email });
};
