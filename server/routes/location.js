const express = require("express");
const {
  getLocation,
  getLocations,
  postLocation,
} = require("../controllers/locationController");

const router = express.Router();

router.get("/", getLocations);

router.get("/:name", getLocation);

router.post("/", postLocation);

module.exports = router;
