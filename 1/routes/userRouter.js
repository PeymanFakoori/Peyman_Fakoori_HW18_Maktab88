const express = require("express");
const router = express.Router();

const {
  signUpPage,
  registration,
  loginPage,
  dashbordPage,
} = require("../controllers/userController");

router.get("/signup", signUpPage);
router.post("/signup", registration);

router.get("/login", loginPage);

router.get("/dashboard", dashbordPage);

module.exports = router;
