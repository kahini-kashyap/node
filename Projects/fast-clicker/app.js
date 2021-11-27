const express = require("express");
const app = express();
app.set("ejs", "view-engine");
let fs = require("fs");
app.use(express.json());

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.get("/gethighscore", function(req, res){
    fs.readFile("./highScore.txt", function(err, data){
        if(err){
            res.json({score:"some error occured"});
        }
        else{
            res.json({score: data.toString()});
        }
    });
})

app.post("/updatehighscore", function(req, res){
    fs.readFile("./highScore.txt", function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let current_score = parseInt(data.toString());
            let user_score = parseInt(req.body.score);
            if(user_score>current_score){
                fs.writeFile("./highScore.txt",user_score.toString(), function(err){
                    if(err){
                        console.log(err);
                    }
                })
            }
        }
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