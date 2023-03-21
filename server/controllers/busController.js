const Bus = require("../models/busModel");
const mongoose = require("mongoose");

const getBuses = async (req, res) => {
  const bus = await Bus.find({});
  res.status(200).json(bus);
};

const getBus = async (req, res) => {
  const { name } = req.params;
  const bus = await Bus.findOne({ name });
  res.status(200).json(bus);
};

const postBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(200).json(bus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getBuses, getBus, postBus };
