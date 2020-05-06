const {Schema, model} = require("mongoose")
const User = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        unique:false,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = model("User", User)