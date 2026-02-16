const bcrypt = require("bcryptjs");
const { successResponse } = require("./res.controller");
const createError = require("http-errors");
const User = require("../models/userModel");

const handleLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) throw createError(404, "User not found");
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw createError(401, "Incorrect Password");
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    return successResponse(res, {
      statusCode: 200,
      message: "User login successfully",
      payload: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

const handleLogout = async (req, res, next) => {
  try {
    return successResponse(res, {
      statusCode: 200,
      message: "User logout successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleLogin, handleLogout };
