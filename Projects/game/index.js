const express = require("express");
const app = express();
const ejs = require("ejs");
var count = 0;const fs = require("fs");
var highScore;
const fetch = require("cross-fetch");
fetch("https://api.jsonbin.io/b/6103f687046287097ea37c41").then(function(res){
    return res.json()
}).then(function(res2){
highScore = res2.highScore;
})
fs.readFile("highscore.txt", (error, data)=>{
    if(error)
    console.log(error)
    else
    highScore = parseInt(data.toString());
})

const { json } = require("express");

app.get("/", function (req, res){
    res.render("index.ejs")
})

app.get("/score", function(req, res){
    res.send("hello");
    count ++;
    if(count>highScore){
        highScore = count
        fs.writeFile("highscore.txt", highScore.toString(), (error)=>{
            if(error)
            console.log(error)
        })

    }
   // console.log(count);
})

app.get("/highscore", function(req, res){
    res.send(highScore.toString());
    
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running")
    }
})