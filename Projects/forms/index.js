const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/data/:a/:b/:c/:d", function(req,res){
    console.log(req.params.a, req.params.b, req.params.c, req.params.d)
})

app.listen(5000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running")
    };
})