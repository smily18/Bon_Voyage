const express = require("express");
const { getBuses, postBus, getBus } = require("../controllers/busController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//For Restricting only Users
//router.use(requireAuth);

router.get("/", getBuses);

router.get("/:name", getBus);

router.post("/", postBus);

module.exports = router;
