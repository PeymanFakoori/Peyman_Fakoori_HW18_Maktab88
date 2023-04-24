const express = require("express");
const router = express.Router();
const { getAll, creat, update, deleted } = require("../controller/studentCo");
const { creatValid } = require("../middlewares/studentMid");

router.get("/getAll", getAll);

router.post("/creat", creatValid, creat);

router.put("/update/:id", update);

router.delete("/delete/:id", deleted);

module.exports = router;
