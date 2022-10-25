const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.get("/me", verifyToken, userController.getMe);

module.exports = router;
