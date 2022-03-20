const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const uuid = require("uuid");//for unique string names
const childprocess =require("child_process");
const terminal  = childprocess.spawn;


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/code", function(req, res){
    var filename = "users/"+uuid.v4()+".py";
    fs.writeFile(filename, req.body.code, function(err){
        if(err){
            console.log("err");
        }
        else{
            let python_terminal = terminal("python", [filename]);
            python_terminal.stdout.on("data", function(data){
                res.json({output: data.toString()});
                fs.unlink(filename,function(err){
                    if(err){
                        console.log("error");
                    }
                    else{
                        console.log("file deleted");
                    }
                });
            })
        }
    })


})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})