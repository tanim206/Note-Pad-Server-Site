const { successResponse } = require("../controller/res.controller");

const isloggedIn = async (req, res, next) => {
  try {
    if (!req.user) {
      return successResponse(res, {
        statusCode: 200,
        message: "You must be logged in",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const isloggedOut = async (req, res, next) => {
  try {
    if (req.user) {
      return successResponse(res, {
        statusCode: 200,
        message: "You are already logged in",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  try {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({
        statusCode: 403,
        message: "You are not an admin",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isloggedIn, isloggedOut, isAdmin };
