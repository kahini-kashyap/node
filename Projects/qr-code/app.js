const express = require("express");
const app = express();
const qrcode = require("qrcode");
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/send",function(req, res){
    let data = req.body.data;
    qrcode.toDataURL(data, function(error, url){
        res.json({url});
    })
})

app.listen(5000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})