const createError = require("http-errors");
const { student } = require("../models/studentModel");

const getAll = async (req, res, next) => {
  try {
    const getAllStudent = await student.findAll();
    res.json(getAllStudent);
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore getAll students route"));
  }
};
const creat = async (req, res, next) => {
  try {
    const newStudent = await student.create(req.body);
    res.json(newStudent);
  } catch (error) {
    next(createError(500, "errore creat students route"));
  }
};
const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      studentCode: req.body.studentCode,
    };

    const updateStudent = await student.update(data, {
      where: {
        id,
      },
    });

    res.json("student Updated!!");
  } catch (error) {
    console.log(error.message);
    next(createError(500, "errore update students route"));
  }
};
const deleted = async (req, res, next) => {
  try {
    const id = req.params.id;

    const newStudent = await student.destroy({
      where: {
        id,
      },
    });

    res.json("Deleted");
  } catch (error) {
    console.log(error);
    next(createError(500, "errore creat students route"));
  }
};
module.exports = { getAll, creat, update, deleted };
