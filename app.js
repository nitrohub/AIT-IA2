var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    user        = require("./models/user");
    passport    = require("passport"),
   localStrategy=require("passport-local"),
passportLocalMongoose=require("passport-local-mongoose"),
// methodOverride  =require("method-override");  //This is to use the Put and Delete routes

 mongoose.connect("mongodb://localhost/IA2",{ useNewUrlParser: true });

    // res.send("Post working!");
    var newUser1=({username:"Sunny@gmail.com"});
    var newUser2=({username:"Michael@yahoo.com"});

user.register(newUser1,"Sunny@123",function(err,user){
 if(err){
     console.log(err);
    //  res.render("register");
 }else{
     passport.authenticate("local")(req,res,function(){
        //  res.redirect("/");
        console.log("user1 registered");
     })
 }    
})

user.register(newUser2,"Michael@123",function(err,user){
    if(err){
        console.log(err);
       //  res.render("register");
    }else{
        passport.authenticate("local")(req,res,function(){
            console.log("user2 registered");
        })
    }    
   })
   


app.get("/",function(req,res){
    res.render("login.ejs");
});

 app.listen(9000,process.env.IP,function(){
    console.log("Server has Started!!");
});
