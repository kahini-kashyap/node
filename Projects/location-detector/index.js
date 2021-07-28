const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


app.get("/data/:a/:b/:c/:d", function(req,res){
    console.log(req.params.a, req.params.b, req.params.c, req.params.d)
})

app.get("/location/:a/:b", function(req, res){
    fs.appendFile("locations.txt", req.params.a + " " + req.params.b + "\n", function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Location detected and saved");
            res.json({message: "Data saved"});
        }
    })
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running");
    }
})