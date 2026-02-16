const mongoose = require("mongoose");
const User = require("../models/userModel");
const createError = require("http-errors");

const createUser = async (name, email, password) => {
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw createError(400, "Email already exists");
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};
const getUsers = async (search) => {
  try {
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
    return { users, totalUsers };
  } catch (error) {
    throw error;
  }
};
const getUser = async (id, options = {}) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    const user = await User.findById(id, options).select("-password").lean();
    if (!user) {
      throw createError(404, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
const deleteUserById = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    const user = await User.findById(id);
    if (!user) {
      throw createError(404, "User not found");
    }
    if (user.isAdmin) {
      throw createError(403, "Admin cannot be deleted");
    }
    await user.deleteOne();
    return user;
  } catch (error) {
    throw error;
  }
};
const updatedUserById = async (id, name, email) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(400, "Invalid user id");
    }
    if (!name) {
      throw createError(404, "Name is required");
    }
    if (!email) {
      throw createError(400, "Email cannot be updated");
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true },
    );
    if (!updatedUser) {
      throw createError(404, "User not found");
    }
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUserById,
  updatedUserById,
};
