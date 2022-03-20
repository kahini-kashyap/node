const express = require("express");
const app = express();
const uuid = require("uuid");
const fs = require("fs");
const child_process = require("child_process");
const terminal = child_process.spawn;
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/code", function (req, res) {
    const filename = "users/" + uuid.v4() + ".js";
    let flag = 0;
    fs.writeFile(filename, req.body.code, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            let js_terminal = terminal("node", [filename]);
            setTimeout(function(){
                if(flag == 0){
                    res.json({output: "code time out"});
                    js_terminal.exit();
                }
               
            },1000)
            js_terminal.stdout.on("data", function (data) {
                flag = 1;

                res.json({ output: data.toString() });
                fs.unlink(filename, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("file deleted");
                    }
                })
            })
        }
    })
})

app.listen(5000, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server is running");
    }
})