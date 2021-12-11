const express = require("express");
const app = express();
app.set("view engine", "ejs");
const requestIp = require("request-ip");
const fs = require("fs");

app.get("/",  function(req, res){
    let ip = requestIp.getClientIp(req);
    res.render("index.ejs");
    fs.appendFile("ip.txt", ip + "\n", function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("data appended successfully!");
        }
    })
})

app.get("/track", function(req, res){
    let ip = requestIp.getClientIp(req);
    res.json({ip});
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})