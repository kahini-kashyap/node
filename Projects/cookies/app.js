const express = require("express");
const app = express();
const cookie = require("cookie-parser");

app.use(cookie())

function verify(req, res, next){
    if(req.cookies.trial=="123"){
        next();
    }
    else{
        res.redirect("/");
    }
    console.log(req.cookies)
}

app.get("/", function(req, res){
    res.cookie("trial", "123");
    res.json({message: "cookies"});
})

app.get("/music", verify, function(req, res){
    res.json({message: "abc123"})
})

app.get("/clear", function(req, res){
    res.clearCookie("trial");
    res.send("hi");
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})


















// app.get("/", function(req, res){
//     res.cookie("kahini", "kashyap")
//     res.json({message: "hi"});
// })

// app.get("/route1", function(req, res){
//     res.cookie("trial", "123")
//     res.json({message: "hi"});
// })

// app.get("/route2", function(req, res){
//     res.json({message: "hi"});
//     console.log(req.cookies)
// })