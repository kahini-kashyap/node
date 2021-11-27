const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
const fs = require("fs");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res){
    res.render("signin.ejs");
})

app.get("/signin", function(req, res){
    res.render("signin.ejs");
})

app.get("/signup", function(req, res){
    res.render("signup.ejs");
})

app.post("/signin1", function(req, res){
    var {email, password} = req.body;
    if(!email || !password)
    {
        return res.json({message: 'Enter both email and password'})
    }
    fs.readFile('./users/'+email , (error, data)=>
    {
        if(error)
        {
            res.json({message: 'User not registered'})
        }
        else{
            if(data.toString()==password)
            {
                res.cookie("random","123");
                res.json({message: 'Sign in successful'})
            }
            else
            {
                res.json({message: 'Incorrect Id or password'})
            }
        }
        
    })
}); 

app.get("/secret", function(req, res){
    res.render("secret.ejs");
})

app.post("/signup1", function(req,res){
      var {email, password} = req.body;
      fs.writeFile('./users/'+email, password, (error)=>{
          if(error)
          {
              res.json({message: 'Error in sign up'})
          }
          else{
              res.json({message: 'Sign Up Successful'})
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