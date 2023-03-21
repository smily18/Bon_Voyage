const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    town:{
      type:String,
      required:true
    },
    location:{
      type:[String,String],
      required:true
    }
  },
  { timestamps: true }
);

const Bus=mongoose.model("buses",busSchema);

module.exports=Bus;
