const url = require("url");
const User = require("../models/UserModel");

const signUpPage = (req, res, next) => {
  res.render("pages/signUp");
};

const loginPage = (req, res, next) => {
  res.render("pages/login");
};

const profilePage = (req, res, next) => {
  res.render("pages/profile");
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
const getLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.redirect(`/user/login?errorMessage=User not found!`);

    const isMatch = await user.validatePassword(req.body.password);
    if (!isMatch)
      return res.redirect(`/user/login?errorMessage=Password is wrong!`);

    req.session.user = user;
    res.redirect("/user/profile");
  } catch (err) {
    res.redirect(
      url.format({
        pathname: "/user/login",
        query: {
          errorMessage: "Server Error!",
        },
      })
    );
  }
};

module.exports = {
  signUpPage,
  loginPage,
  profilePage,
  registration,
  getLogin,
};
