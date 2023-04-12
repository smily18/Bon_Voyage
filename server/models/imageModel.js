const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const imageSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
})

module.exports= mongoose.model("Image",imageSchema);