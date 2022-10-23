const {
  signUpService,
  findUserByEmailService,
} = require("../services/user.services");
const { generateToken } = require("../utils/token");

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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        error: "Please provide credentials",
      });
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = password == user.password;

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "Fail",
        error: "Password is not correct",
      });
    }

    const token = generateToken(user);

    const { password: pwd, confirmPassword, ...others } = user.toObject();

    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "User found",
      // data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};
