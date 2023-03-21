const express = require("express");
const {getCities, postCity, getCity}=require('../controllers/cityController')

const router = express.Router();

router.get("/:name",getCity);

router.get("/", getCities);

router.post("/",postCity)

module.exports = router;
