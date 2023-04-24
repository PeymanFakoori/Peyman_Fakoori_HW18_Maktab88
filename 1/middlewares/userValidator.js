const createError = require("http-errors");

const user = require("../models/UserModel");

const singupValidator = async (req, res, next) => {
  //firstName
  if (!req.body.firstName)
    return next(createError(400, "firstname is required"));

  if (req.body.firstName.length >= 30 || req.body.firstName.length < 3)
    return next(createError(400, "firstName must be in range(3-30)"));

  if (typeof req.body.firstName !== "string")
    return next(createError(400, "tyoe of firstName must be string"));

  // LastName

  if (!req.body.lastName) return next(createError(400, "lastName is required"));

  if (req.body.lastName.length >= 30 || req.body.lastName.length < 3)
    return next(createError(400, "lastName must be in range(3-30)"));

  if (typeof req.body.lastName !== "string")
    return next(createError(400, "type of lastName must be string"));
  // username
  if (!req.body.username) return next(createError(400, "username is required"));
  const checkUsername = await user.exists({
    username: req.body.username,
  });

  if (checkUsername) return next(createError(400, "username is exists!"));

  // gender
  if (!req.body.gender) req.body.gender = "not-set";

  if (!["male", "female", "not-set"].includes(req.body.gender))
    return next(createError(400, "Your gender is invalid."));

  // password
  if (!req.body.password) return next(createError(400, "password is required"));

  if (!req.body.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
    return next(
      createError(400, "1 letter and 1 Number is required in password")
    );

  if (req.body.password.length <= 8)
    return next(createError(400, "password must be 8 caracters"));

  // repat password
  if (req.body.password !== req.body.repeatPassword)
    return next(createError(400, "password is not match"));

  // role
  if (!req.body.role) req.body.role = "user";

  if (!["admin", "user"].includes(req.body.role))
    return next(
      createError(400, "Your role is invalid. role must be admin or user")
    );

  next();
};

module.exports = singupValidator;
