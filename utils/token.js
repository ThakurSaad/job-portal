const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    _id: userInfo._id,
    email: userInfo.email,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return token;
};
