const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"))

app.post("/form", function(req,res){
    console.log(req.body);
    res.json({message: "you have been signed up!"})
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/send", function(req, res){
    console.log(req.body);
})

app.get("/practice", function(req,res){
    res.sendFile(__dirname + "/practice.html")
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running")
    }
