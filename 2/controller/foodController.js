const createError = require("http-errors");
const { Food } = require("../models/foodModal");

const getAll = async (req, res, next) => {
  try {
    const getAllfood = await Food.findAll();
    res.json(getAllfood);
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore getAll Foods route"));
  }
};

const creat = async (req, res, next) => {
  try {
    const data = { foodName: req.body.foodName, price: req.body.price };
    const newfood = await Food.create(data);
    res.json(newfood);
  } catch (error) {
    next(createError(500, "errore creat food route"));
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = { foodName: req.body.foodName, price: req.body.price };
    const updateFood = await Food.update(data, { where: { id } });
    res.json("Food is updated!!");
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore update Food route"));
  }
};

const deleted = async (req, res, next) => {
  try {
    const id = req.params.id;

    const FoodDel = await Food.destroy({
      where: {
        id,
      },
    });
    res.json("Deleted");
  } catch (error) {
    console.log(error);
    next(createError(500, "errore creat Food route"));
  }
};

module.exports = { getAll, creat, update, deleted };
