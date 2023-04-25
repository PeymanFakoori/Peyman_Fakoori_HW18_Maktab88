const express = require("express");
const router = express.Router();
const {
  getAll,
  creat,
  update,
  deleted,
} = require("../controller/foodController");
const { creatValid } = require("../middlewares/foodValidator");

router.get("/getAll", getAll);

router.post("/creat", creatValid, creat);

router.put("/update/:id", update);

router.delete("/delete/:id", deleted);

module.exports = router;
