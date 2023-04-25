const createError = require("http-errors");
const { food } = require("../models/foodModal");

const creatValid = async (req, res, next) => {
  try {
    if (!req.body.foodName)
      return next(createError(400, "foodName is required"));

    if (req.body.foodName.length <= 2 || req.body.foodName.length >= 30)
      return next(createError(400, "foodName must between 3 & 30 leters"));

    if (typeof req.body.foodName !== String)
      return next(createError(400, "foodName must be string"));

    if (typeof req.body.price !== Number)
      return next(createError(400, "price must be number"));

    if (!req.body.price) return next(createError(400, "price is required"));
  } catch (error) {
    next(createError(500, "errore creat food route valid"));
  }
  next();
};

module.exports = { creatValid };
