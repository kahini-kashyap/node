const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.json({message: "Hi!"});
})

app.get("/run", function(req,res){
    var a = 2138103273097314189630183613018361;
    var b = 2937120937120327370193710937307071309701927;
    console.log(a+b);
    res.send("sum");
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})