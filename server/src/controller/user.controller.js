const User = require("../../src/models/userModel");
const { successResponse } = require("./res.controller");
const createError = require("http-errors");
const handleCreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userData = { name, email, password };
    const user = await User.create(userData);
    return successResponse(res, {
      statusCode: 200,
      message: "User create successfully",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetUsers = async (req, res, next) => {
  try {
    const { search } = req.query;
    let filter = {};
    if (search) {
      filter = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      };
    }
    const users = await User.find(filter).select("-password");
    const totalUsers = await User.countDocuments(filter);
    return successResponse(res, {
      statusCode: 200,
      message: "Users found successfully",
      payload: {
        totalUsers,
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleCreateUser, handleGetUsers };
