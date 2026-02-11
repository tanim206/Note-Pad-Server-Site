const express = require("express");
const {
  handleCreateUser,
  handleGetUsers,
  handleDeleteUsers,
  handleGetUserByID,
  handleDeleteUserByID,
  handleUpdatedUserByID,
} = require("../controller/user.controller");
const multer = require("multer");
const upload = multer();

const userRouter = express.Router();
userRouter.post("/create-user", upload.none(), handleCreateUser);
userRouter.get("/", handleGetUsers);
userRouter.get("/:id", handleGetUserByID);
userRouter.delete("/delete-users", handleDeleteUsers);
userRouter.delete("/:id", handleDeleteUserByID);
userRouter.put("/:id", upload.none(), handleUpdatedUserByID);

module.exports = userRouter;
