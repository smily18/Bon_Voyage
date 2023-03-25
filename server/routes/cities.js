const express = require("express");
const {getCities, postCity, getCity}=require('../controllers/cityController');
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//For Restricting only Users
//router.use(requireAuth);

router.get("/:name",getCity);

router.get("/", getCities);

router.post("/",postCity)

module.exports = router;
