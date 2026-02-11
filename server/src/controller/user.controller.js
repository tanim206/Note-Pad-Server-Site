const mongoose = require("mongoose");
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
      message: "Users return successfully",
      payload: {
        totalUsers,
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};
const handleGetUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    const user = await User.findById(id).select("-password").lean();
    if (!user) {
      throw createError(404, "User not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "User return successfully",
      payload: { user },
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteUsers = async (req, res, next) => {
  try {
    await User.deleteMany();
    return successResponse(res, {
      statusCode: 200,
      message: "Users Deleted successfully",
      payload: {},
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    await User.findByIdAndDelete(id);
    return successResponse(res, {
      statusCode: 200,
      message: "User delete successfully",
    });
  } catch (error) {
    next(error);
  }
};
const handleUpdatedUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    if (!name) {
      throw createError(404, "Name is required");
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true },
    ).select("-password");
    return successResponse(res, {
      statusCode: 200,
      message: "User updated successfully",
      payload: { updatedUser },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateUser,
  handleGetUsers,
  handleGetUser,
  handleDeleteUsers,
  handleDeleteUser,
  handleUpdatedUser,
};
