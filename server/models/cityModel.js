const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bus: {
      type: [String],
      required: true,
    },
    img:{
      type:String,
    }
  },
  { timestamps: true }
);

const City = mongoose.model("cities", citySchema);

module.exports = City;
