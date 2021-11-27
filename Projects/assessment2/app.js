const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kahini:abcd@cluster0.spez7.mongodb.net/Assessment?retryWrites=true&w=majority").then(function(){
    console.log("connected to database");
}).catch(function(err){
    console.log(err);
})
const data = require("./models/data.js");
const bcrypt = require("bcrypt");

app.get("/", function(req, res){
    res.render("signup.ejs");
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

app.post("/signup1", async function (req, res) {
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var {fname,lname,email,password} = req.body;
    var hash = await bcrypt.hash(password, 10);
    let tempdata = new data({
        fname:firstname, lname:lastname, email, password
    })
    tempdata.save().then(function(data){
        console.log(data) //email
    }).catch(function(err){
        console.log(err);
    });
    
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})