const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const singupValidator = require("../middlewares/userValidator");
const loginvalidator = require("../middlewares/loginValidator");

const {
  signUpPage,
  registration,
  loginPage,
  profilePage,
  getLogin,
  logout,
} = require("../controllers/userController");

router.get("/signup", signUpPage);
router.post("/signup", singupValidator, registration);

router.get("/login", loginPage);
router.post("/login", loginvalidator, getLogin);
router.get("/profile", profilePage);
router.get("/logout", logout);

module.exports = router;
