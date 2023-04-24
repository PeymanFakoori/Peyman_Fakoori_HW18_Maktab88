const createError = require("http-errors");
const { invoice } = require("../models/invoiceModal");

const getAll = async (req, res, next) => {
  try {
    const getAllInvoice = await invoice.findAll();
    res.json(getAllInvoice);
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore getAll invoices route"));
  }
};
const creat = async (req, res, next) => {
  try {
    const newInvoice = await invoice.create(req.body);
    res.json(newInvoice);
  } catch (error) {
    next(createError(500, "errore creat Invoice route"));
  }
};
const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = { TrackingCode: req.body.TrackingCode };
    const updateinvoice = await invoice.update(data, { where: { id } });
    res.json("invoice is updated!!");
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore update invoice route"));
  }
};
const deleted = async (req, res, next) => {
  try {
    const id = req.params.id;

    const delInvoice = await invoice.destroy({
      where: {
        id,
      },
    });
    res.json("Deleted");
  } catch (error) {
    console.log(error);
    next(createError(500, "errore creat invoice route"));
  }
};
module.exports = { getAll, creat, update, deleted };
