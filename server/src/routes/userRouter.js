const express = require("express");
const { handleCreateUser, handleGetUsers } = require("../controller/user.controller");
const multer = require("multer");
const upload = multer();

const userRouter = express.Router();
userRouter.post("/create-user", upload.none(), handleCreateUser);
userRouter.get("/", handleGetUsers);

module.exports = userRouter;
