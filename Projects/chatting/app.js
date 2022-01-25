const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
var message = "";

app.get("/", function(req, res){
    res.render("message.ejs");
})

app.post("/message", function(req, res){
    console.log(req.body);
    message = req.body.text;
    res.json({message: "sent"});
})

app.get("/check", function(req, res){
    if(message==""){
        res.json({message: "no new message"});
    }
    else{
        res.json({message});
        message = "";
    }
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})