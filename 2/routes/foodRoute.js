const express = require("express");
const router = express.Router();
const { getAll, creat, update, deleted } = require("../controller/foodCo");
const { creatValid } = require("../middlewares/foodMid");

router.get("/getAll", getAll);

router.post("/creat", creatValid, creat);

router.put("/update/:id", update);

router.delete("/delete/:id", deleted);

module.exports = router;
