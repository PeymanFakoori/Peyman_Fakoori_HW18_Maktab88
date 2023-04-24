const { student } = require("../models/studentModel");
const { Food } = require("../models/foodModal");
const { invoice } = require("../models/invoiceModal");

const creat = async () => {
  try {
    await student.sync({ alter: true });
    await Food.sync({ alter: true });
    await invoice.sync({ alter: true });
  } catch (error) {
    console.log(error);
    console.log("load model error!!!!");
  }
};
creat();
