const express = require("express");
const app = express();
const port = process.env.port;
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/form/:a/:b/:c", function (req, res) {
    var fname = req.params.a
    var lname = req.params.b;
    var mail = req.params.c;
    var result = fname + " " + lname + " " + mail + "\n";
    fs.appendFile("data.txt", result, function(err){
        if(err){
            res.json({
                message: "An error occured"
            })  
        }
        else{
            res.json({
                message: "Your response has been recorded"
            })
        }
    });
})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server is running on port " + port)
    }
})