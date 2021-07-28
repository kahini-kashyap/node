var express = require("express");
var app = express();

var fs = require("fs");

app.get("/kahini", function(req, res){
    res.send("Hi!");
});

app.get("/ayush", function(req, res){
    res.send("Konichiwa");
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/page1.html");
    console.log("hello");
})

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/page1.html");
})

app.get("/aboutus", function(req, res){
    res.sendFile(__dirname + "/page2.html")
})

app.get("/contactus", function(req, res){
    res.sendFile(__dirname + "/page3.html")
})

app.get("/member", function(req, res){
    res.sendFile(__dirname + "/page4.html")
})


app.get("/random", function(req, res){
    res.sendFile(__dirname + "/page5.html")
})

app.get("/priyanshu", function(req, res){
    res.send("namaste");
})
app.get("/form/:lol/:rofl", (req,res)=>{
   var k = req.params.lol;
   var j = req.params.rofl;
   fs.appendFile("test1.txt", k+"\n", (error)=>{
       if(error)
       console.log(error);
       else{
           console.log("Data added successfully");
       }
   })
   console.log(j);
   res.send("asdfsgdhfgj");
})
app.get("/home"), function (req,res){
}

app.listen(3000, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Server is running.")
    }
})