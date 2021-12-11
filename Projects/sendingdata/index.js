const express = require("express");
const app = express();

// app.get("/trial/:a", function(req, res){
//     let a = req.params.a;
//     console.log(a);
//     res.send("Data sent");
// })

// app.get("/data", function(req, res){
//     // let a = req.params.a;
//     // console.log(a);
//     res.send("Data sent");
// })

app.get("/", function(req, res){
    res.sendFile(__dirname + "/song1.mp3");
})

app.get("/data/:a/:b", function(req, res){
    let name = req.params.a;
    let email = req.params.b;
    console.log({name, email});
    res.json({message:"data sent"});
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server  is running");
    }
})