const express = require("express");
const router = express.Router();

const {
  signUpPage,
  registration,
  loginPage,
  profilePage,
  getLogin,
} = require("../controllers/userController");

router.get("/signup", signUpPage);
router.post("/signup", registration);

router.get("/login", loginPage);
router.post("/login", getLogin);
router.get("/profile", profilePage);

module.exports = router;
