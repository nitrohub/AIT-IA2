var mongoose = require("mongoose");
var passportLocal=require("passport-local-mongoose");
var userSchema=new mongoose.Schema({
    username:String,
    password:String
});

userSchema.plugin(passportLocal);
module.exports=mongoose.model("users",userSchema);