const express = require("express");
const app = express();
const cookie = require("cookie-parser");
app.use(cookie());

app.get("/", function(req, res){
    res.cookie("test", "sample1");
    res.cookie("test2","sample2",{maxAge:10000});
    res.json("cookie working");
})

app.get("/cookies", function(req,res){
    console.log(req.cookies);
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})