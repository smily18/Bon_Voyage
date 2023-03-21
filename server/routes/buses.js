const express=require('express');
const { getBuses, postBus, getBus } = require('../controllers/busController');

const router=express.Router();

router.get("/",getBuses)

router.get("/:name",getBus)

router.post("/",postBus);

module.exports=router;