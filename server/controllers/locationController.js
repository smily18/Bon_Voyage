const mongoose = require("mongoose");
const Location = require("../models/locationModel");

const getLocations=async(req,res)=>{
  const location=await Location.find({});
  res.status(200).json(location);
}

const getLocation = async (req, res) => {
  const { name } = req.params;
  const location = await Location.findOne({ name });
  res.status(200).json(location);
};

const postLocation=async(req,res)=>{
  try{
    const location=await Location.create(req.body);
    res.status(200).json(location);
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

module.exports = { getLocation,getLocations,postLocation };
