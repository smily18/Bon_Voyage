const Image = require("../models/imageModel");
const path = require("path");

const getImage = async (req, res) => {
  const { name } = req.params;
  const image = await Image.findOne({ name });
  res.status(200).json(image);
};

const postImage = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file.path;
    const image = await Image.create({name,file});
    res.status(200).json(image);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getImage,
  postImage,
};
