const express = require("express");
const {
  handleCreateUser,
  handleGetUsers,
  handleDeleteUsers,
  handleGetUser,
  handleDeleteUser,
  handleUpdatedUser,
} = require("../controller/user.controller");
const multer = require("multer");
const upload = multer();

const userRouter = express.Router();
userRouter.post("/create-user", upload.none(), handleCreateUser);
userRouter.get("/", handleGetUsers);
userRouter.get("/:id", handleGetUser);
userRouter.delete("/delete-users", handleDeleteUsers);
userRouter.delete("/:id", handleDeleteUser);
userRouter.put("/:id", upload.none(), handleUpdatedUser);

module.exports = userRouter;
