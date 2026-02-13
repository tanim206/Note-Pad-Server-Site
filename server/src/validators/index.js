const { validationResult } = require("express-validator");
const { errorResponse } = require("../controller/res.controller");

const runvalidation = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return errorResponse(res, {
        statusCode: 422,
        message: error.array()[0].msg,
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = runvalidation;
