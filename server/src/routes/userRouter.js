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
const { isloggedOut, isloggedIn, isAdmin } = require("../utils/auth");
const { validateUserCreate } = require("../validators/auth");
const runvalidation = require("../validators");
const upload = multer();
const userRouter = express.Router();

// {
//   // userRouter.post("/create-user", upload.none(), isloggedOut, handleCreateUser);
// // userRouter.get("/", isloggedIn, isAdmin, handleGetUsers); // only admin
// // userRouter.get("/:id", isloggedIn, handleGetUserByID);
// // userRouter.delete("/delete-users", isloggedIn, isAdmin, handleDeleteUsers); // admin
// // userRouter.delete("/:id", isloggedIn, handleDeleteUserByID);
// // userRouter.put("/:id", upload.none(), isloggedIn, handleUpdatedUserByID);

// }
userRouter.post(
  "/create-user",
  upload.none(),
  validateUserCreate,
  runvalidation,
  handleCreateUser,
);
userRouter.get("/", handleGetUsers);
userRouter.get("/:id", handleGetUserByID);
userRouter.delete("/", handleDeleteUsers);
userRouter.delete("/:id", handleDeleteUserByID);
userRouter.put("/:id", upload.none(), handleUpdatedUserByID);

module.exports = userRouter;
