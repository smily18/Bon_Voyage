const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const locationSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    long:{
        type:Number,
        required:true
    }
})

module.exports= mongoose.model("Location",locationSchema);