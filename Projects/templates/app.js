const { render } = require("ejs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.get("/data/:a", function(req, res){
   res.json({link: "/greeting/"+req.params.a})
})

app.get("/greeting/:a", function(req,res){
    res.render("greeting.ejs", {name: req.params.a})
})

app.listen(5000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})