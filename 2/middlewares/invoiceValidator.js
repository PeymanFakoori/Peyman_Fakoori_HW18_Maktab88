const createError = require("http-errors");
const { invoice } = require("../models/invoice_model");

const creatValid = async (req, res, next) => {
  try {
    if (!req.body.TrackingCode)
      return next(createError(400, "TrackingCode is required"));

    if (typeof req.body.TrackingCode !== Number)
      return next(createError(400, "TrackingCode must be number"));

    if (!req.body.TrackingCode.match(/^[1-9]\d{11}$/))
      return next(createError(400, "TrackingCode must be 12 number "));
  } catch (error) {
    next(createError(500, "errore creat food route valid"));
  }
  next();
};

module.exports = { creatValid };
