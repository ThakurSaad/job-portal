const User = require("../models/User");

exports.signUpService = async (userInfo) => {
  return await User.create(userInfo);
};
