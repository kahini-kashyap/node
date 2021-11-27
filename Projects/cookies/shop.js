const express = require("express");
const app = express();
const cookie = require("cookie-parser");
app.use(cookie());

app.get("/", function(req, res){
    if(req.cookies.genre){
        res.json({genre: req.cookies.genre});
    }
    else{
    res.sendFile(__dirname + "/index.html");
    }
})

app.get("/:a", function(req, res){
    var genre = req.params.a;
    res.cookie("genre", genre);
    res.json({genre});
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})