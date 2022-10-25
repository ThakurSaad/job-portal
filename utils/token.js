const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    _id: userInfo._id,
    email: userInfo.email,
    role: userInfo.role,
  };

  const token = jwt.sign(
    payload,
    dbb6821291aa3372f3d73fb149e61b7fb9eb9f84c01bfc984a001d81389fb8d46a49223f2cb4431521e5addc40424d360405a938fe270b59926cff1ce81928ff,
    {
      expiresIn: "7d",
    }
  );

  return token;
};
