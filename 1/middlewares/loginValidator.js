const createError = require("http-errors");

const loginvalidator = async (req, res, next) => {
  try {
    if (!req.body.username)
      return next(createError(400, "please enter username"));

    const checkUsername = await user.exists({
      username: req.body.username,
    });

    if (!checkUsername)
      return next(createError(400, "username is not exists!"));

    if (!req.body.password)
      return next(createError(400, "please enter password"));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loginvalidator;
