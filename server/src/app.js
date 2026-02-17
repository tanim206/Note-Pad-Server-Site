const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const { errorResponse } = require("./controller/res.controller");

const app = express();

const userRouter = require("./routes/userRouter");
const { authRouter } = require("./routes/authRouter");
const noteRouter = require("./routes/noteRouter");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 👇 ADD THIS LINE
app.use("/public", express.static("public"));

// Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

// 404 error
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// Server error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
