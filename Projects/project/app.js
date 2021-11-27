const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname+"/public")); //to add an image
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kahini:abcd@cluster0.spez7.mongodb.net/Assessment?retryWrites=true&w=majority").then(function(){
    console.log("connected to database");
}).catch(function(err){
    console.log(err)
})
const data = require("./models/data.js");

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.get("/signup", function(req, res){
    res.render("signup.ejs");
})

app.post("/signup1",function(req, res){
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let age = req.body.age;
    if(!password || !email || !name || !age){
        return res.json({message: "Please enter all the fields correctly"})};

})

app.get("/signin", function(req, res){
    res.render("signin.ejs");
})

app.post("/signin1",function(req, res){
    console.log(req.body);
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})