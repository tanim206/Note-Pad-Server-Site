const express = require("express");
const { handleLogin, handleLogout } = require("../controller/auth.controller");
const { isloggedOut, isloggedIn } = require("../utils/auth");
const authRouter = express.Router();
const multer = require("multer");
const upload = multer();
authRouter.post("/login", upload.none(), isloggedOut, handleLogin);
authRouter.post("/logout", upload.none(), isloggedIn, handleLogout);

module.exports = { authRouter };
