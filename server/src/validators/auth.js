const { body } = require("express-validator");

const validateUserCreate = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is ruquired. Enter your name")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 charecters long"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required. Enter your email")
    .isEmail()
    .withMessage("Invalid email address"),
  ,
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required. Enter your password")
    .isLength({ min: 6 })
    .withMessage("password should be at least 6 charecters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    )
    .withMessage(
      "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    ),
  ,
];

module.exports = { validateUserCreate };
