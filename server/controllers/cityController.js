const City = require("../models/cityModel");
const mongoose = require("mongoose");

const getCities = async (req, res) => {
  const city = await City.find({});
  res.status(200).json(city);
};

const getCity = async (req, res) => {
  const { name } = req.params;
  const city = await City.findOne({ name });
  res.status(200).json(city);
};

const postCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(200).json(city);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCities,
  postCity,
  getCity
};
