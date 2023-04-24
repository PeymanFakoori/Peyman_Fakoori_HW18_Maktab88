const url = require("url");
const User = require("../models/UserModel");

const signUpPage = (req, res, next) => {
  if (req.session.user) return res.redirect("/user/profile");

  res.render("pages/signUp");
};

const registration = async (req, res, next) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    repeatPassword: req.body.repeatPassword,
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

const loginPage = (req, res, next) => {
  if (req.session.user) return res.redirect("/user/profile");
  res.render("pages/login");
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

const profilePage = (req, res, next) => {
  if (!req.session.user) return res.redirect("/user/login");

  res.render("pages/profile", { user: req.session.user });
};

const logout = (req, res, next) => {
  req.session.destroy();

  res.redirect("/user/login");
};

const removeUser = async (req, res, next) => {
  try {
    const userID = req.session.user._id;
    const removedUser = await User.findByIdAndDelete(userID);
    res.json(removedEmployee);
  } catch (error) {
    next(createError(500, "somthing went wrong"));
  }
};

module.exports = {
  signUpPage,
  loginPage,
  profilePage,
  registration,
  getLogin,
  logout,
  removeUser,
};
