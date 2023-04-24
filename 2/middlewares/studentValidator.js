const createError = require("http-errors");
const { student } = require("../models/studentModel");

const creatValid = async (req, res, next) => {
  try {
    if (!req.body.firstName)
      return next(createError(400, "firstName is required"));

    if (typeof req.body.firstName !== String)
      return next(createError(400, "firstName must be string"));

    if (req.body.firstName.length <= 3 || req.body.firstName.length >= 30)
      return next(createError(400, "firstName must be 3 & 30 leters "));
    //   lastName

    if (!req.body.lastName)
      return next(createError(400, "lastName is required"));

    if (typeof req.body.lastName !== String)
      return next(createError(400, "lastName must be string"));

    if (req.body.lastName.length <= 3 || req.body.lastName.length >= 30)
      return next(createError(400, "lastName must be 3 & 30 leters "));

    //   gender
    if (!req.body.gender) return next(createError(400, "gender is required"));

    if (!["male", "female", "not-set"].includes(req.body.gender))
      return next(
        createError(
          400,
          "Your gender is invalid. gender must be female or male"
        )
      );
    //   student Code
    if (!req.body.studentCode)
      return next(createError(400, "studentCode is required"));

    if (
      !req.body.dateOfBirth.match(
        /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
      )
    )
      return next(createError(400, "dateOfBirth must be number"));
    if (!req.body.studentCode.match(/^[1-9]\d{8}$/i))
      return next(
        createError(
          400,
          "studentCode must be number & not started by 0 & 9 cracter"
        )
      );
  } catch (error) {
    next(createError(500, "errore creat food route valid"));
  }
  next();
};

module.exports = { creatValid };
