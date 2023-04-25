const express = require("express");
const router = express.Router();
const {
  getAll,
  creat,
  update,
  deleted,
} = require("../controller/invoiceController");
const { creatValid } = require("../middlewares/invoiceValidator");

router.get("/getAll", getAll);

router.post("/creat", creatValid, creat);

router.put("/update/:id", update);

router.delete("/delete/:id", deleted);
module.exports = router;
