const express = require("express");
const bodyParser= require("body-parser");
const createError = require("http-errors");
const { errorResponse } = require("./controller/res.controller");
const app = express();
const userRouter = require("./routes/userRouter");

// npm use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -------------End Point-------------//
app.use("/api/users", userRouter);

// client error
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});
// server error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
