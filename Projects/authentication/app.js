const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const jwt = require("jsonwebtoken");

const email1 = "admin@admin.com"
const password1 = "$2b$10$OXeecy/Dced3ladYB.F8mOslp5.SBG98clrSn0VCRzMTSfNcRQZHS";
const email2 = "abc@abc.com"
const password2 = "$2b$10$D5RLKN3y84TLG7NQn52YfuJMk8/KQecM/ZxTGLPTCJOVtJHoqfGIa";
const emails = [email1, email2]; 
const passwords = [password1, password2];

var serverPd = "kahinikashyap";

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index.ejs")
})

app.post("/data", async function (req, res) {

    let { email, password } = req.body;
    if (!email || !password) {
        res.json({ message: "Enter both email and password" })
    }
    else {
           var index = -1;
           for(let i=0; i<emails.length; i++)
           {
               if(emails[i]==email)
               {
                   index = i;
                   break;
               }
           }



        if (index != -1)  {
            var temp = await bcrypt.compare(password, passwords[index])
            if (temp) {
                var payload = {p: emails[index]};
                var token = jwt.sign(payload, serverPd);
                res.cookie("verify", token)
                res.redirect("/success")
            }
            else {
                res.redirect("/failure")
            }
        }
        else {
            res.json({ message: "User does not exist" })
        }
    }

    let hashed_password = await bcrypt.hash(password, 10);

})
function checker(req, res, next) {

 try{
    var token = req.cookies.verify;
    var k = jwt.verify(token, serverPd);

    if(k.p)
    {
        next();
    }
 }
 catch(error)
 {
     res.redirect('/')
 }
  

}

app.get("/user1", function(req, res){

})

app.get("/user2", function(req, res){
    
})

app.get("/signout", function (req, res) {
    res.clearCookie("verify");
    res.redirect("/");
})

app.get("/success", checker, function (req, res) {
    res.render("success.ejs");
})

app.get("/failure", function (req, res) {
    res.json("login failed")
})

app.listen(5000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server is running");
    }
})