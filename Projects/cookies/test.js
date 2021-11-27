const express = require("express");
const app = express();
const cookie = require("cookie-parser");
app.use(cookie());

app.get("/", function(req, res){
    var date = new Date();
    res.cookie("date", date);
    res.json({message: "hi!"});
})

app.get("/visit", function(req, res){
    res.json({message: "hi!"});
    console.log(req.cookies.date);
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})