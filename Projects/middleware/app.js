const express = require("express");
const app = express();
app.use(express.json())
function middleware(req, res, next){
    // res.send("middleware response");
    next();
}

app.post("/data", function (req, res){
    console.log(req.body);
})

app.post("/login", function(req, res){
    
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/home", middleware, function(req, res){
    res.send("home");
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running")
    }
})

//match the email and password the client enters