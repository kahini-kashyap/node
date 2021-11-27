const { json } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mail = require("nodemailer");
mongoose.connect("mongodb+srv://kahini:abcd@cluster0.spez7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then( function(){
console.log("connected to database");
}).catch(function(err){
    console.log(err);
});
const record = require("./model/record.js");
app.use(express.json());

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.post("/data", function(req, res){
    console.log(req.body);
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let temprec = new record({fname, lname, email});
    temprec.save().then(function(data){
       let transporter = mail.createTransport({
           service: "gmail", port: 465, secure:true, auth: {user: "epotliwallet@gmail.com", pass: "Admin@123"}
       });
       var mailoptions = {from: "epotliwallet@gmail.com", to: email, subject: "Sign Up Successful", text:"You have successfully made a new account"};
       transporter.sendMail(mailoptions, function(err, data){
           if(err){
               console.log(err);
           }
           else{
            //    console.log(data);
           }
           res.json({message: "email sent successfully"});
       })
    }).catch(function(err){
        console.log(err);
        res.json({message: "there was an error."})
    })
}
);

app.get("/search/:name",function(req, res){
    record.find({fname:req.params.name}).then(function(data){
        res.json({data});
    }).catch(function(err){
        console.log(err);
    })}
)

app.listen(3000, function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})