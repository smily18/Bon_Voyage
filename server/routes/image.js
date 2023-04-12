const express = require("express");
const {
  getImage,
  postImage,
} = require("../controllers/imageController");

const router = express.Router();

router.get("/:name", getImage);

router.post("/", postImage);

module.exports = router;
