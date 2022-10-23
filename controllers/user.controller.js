const { signUpService } = require("../services/user.services");

exports.signUp = async (req, res, next) => {
  try {
    const user = await signUpService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully signed up",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Sing up not successful",
      error: error.message,
    });
  }
};
