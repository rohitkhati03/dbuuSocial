//import the module for validation

import { body, validationResult } from "express-validator";

//error checker
export const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

//Registration validation
export const validateRegister = [
  body("firstName")
    .trim() //remove extra spaces
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("First Name must be between 2 and 30 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain letters"),

  //lastName
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last Name is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("Last Name must be between 2 and 3")
    .matches(/^a-zA-Z\s+$/)
    .withMessage("Last name can only contain letters"),

  //email
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(), //lowercase+trim

  //password
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contian at one uppercase letter")
    .matches(/[a-z]/)
    .matches("Password must contian atleast one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%&*^]/)
    .withMessage(
      "Password must contain atleast one special character (!@#$%&*^)",
    ),

  //role
  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["student", "faculty", "alumini", "admin"])
    .withMessage("Role must be student, faculty, alumini, admin"),

  //deaprtment
  body("department")
    .trim()
    .notEmpty()
    .withMessage("Deapartment is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Department must be between 2 and 50 characters"),

  //startingYear
  body("startingYear")
    .notEmpty()
    .withMessage("Starting year is required")
    .isInt({ min: 2000, max:new Date().getFullYear() })
    .withMessage(
      `Starting year must be between 2000 and ${new Date().getFullYear()}`,
    ),

  //passingYear
  body("passingYear")
    .notEmpty()
    .withMessage("Passing Year is required")
    .isInt({ min: 2000, max: new Date().getFullYear() + 6 })
    .withMessage("Please provide a valid passing year"),

  //error checker
  checkErrors,
];

//login validator
export const validateLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Password is required"),

  //check error
  checkErrors,
];

//opt vaidation
export const vaidateOTP = [
  body("otp")
    .notEmpty()
    .withMessage("otp is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be 6 digits")
    .isNumeric()
    .withMessage("OTP must contain only number"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  checkErrors,
];
