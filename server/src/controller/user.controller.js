const User = require("../../src/models/userModel");
const { successResponse } = require("../controller/res.controller");

const {
  getUsers,
  getUser,
  deleteUserById,
  updatedUserById,
  createUser,
} = require("../services/user.service");

const handleCreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
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
    const result = await getUsers(search);
    return successResponse(res, {
      statusCode: 200,
      message: "Users return successfully",
      payload: { result },
    });
  } catch (error) {
    next(error);
  }
};
const handleGetUserByID = async (req, res, next) => {
  try {
    const { id, options } = req.params;
    const user = await getUser(id, options);
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
    const result = await User.deleteMany({ isAdmin: false });
    return successResponse(res, {
      statusCode: 200,
      message: "Users Deleted successfully",
      payload: {
        delete_users: result.deletedCount,
      },
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUserById(id);
    return successResponse(res, {
      statusCode: 200,
      message: "User delete successfully",
    });
  } catch (error) {
    next(error);
  }
};
const handleUpdatedUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedUser = await updatedUserById(id, name, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      throw createError(404, "User not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "User updated successfully",
      payload: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateUser,
  handleGetUsers,
  handleGetUserByID,
  handleDeleteUsers,
  handleDeleteUserByID,
  handleUpdatedUserByID,
};
