const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    route: [
      {
        id: Number,
        place: String,
      },
    ],
    currentLocation: [String,String],
    allLat:[String],
    allLng:[String]
  }
);

const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;
