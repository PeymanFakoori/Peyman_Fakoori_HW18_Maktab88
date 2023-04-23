const url = require("url");
const User = require("../models/UserModel");

const signUpPage = (req, res, next) => {
  res.render("pages/signUp");
};

const loginPage = (req, res, next) => {
  res.render("pages/login");
};

const dashbordPage = (req, res, next) => {
  res.render("pages/dashboard");
};

const registration = async (req, res, next) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    gender: req.body.gender,
  });
  try {
    await newUser.save();

    res.redirect("/user/login");
  } catch (err) {
    res.redirect(
      url.format({
        pathname: "/user/signup",
        query: {
          errorMessage: "Server Error!",
        },
      })
    );
  }
};

module.exports = { signUpPage, loginPage, dashbordPage, registration };
