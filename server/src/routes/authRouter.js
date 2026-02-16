const express = require("express");
const multer = require("multer");
const { handleLogin, handleLogout } = require("../controller/auth.controller");
const { isloggedIn, isloggedOut } = require("../utils/auth");

const upload = multer();
const authRouter = express.Router();

authRouter.post("/login", upload.none(), isloggedOut, handleLogin);
authRouter.post(
  "/logout",
  upload.none(),
//   isloggedIn,
//   isloggedOut,
  handleLogout,
);

module.exports = { authRouter };
