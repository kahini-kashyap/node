const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kahini:abcd@cluster0.spez7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(function () {
    console.log("connected to database");
}).catch(function (err) {
    console.log(err);
});

const contact = require("./models/contact.js");

app.get("/", function (req, res) {
    res.send("hi")
})

app.get("/saved", function (req, res) {
    var fname = "Dacb";
    var lname = "Cbda";
    var mobilenum = 192837465;
    var record = new contact({ fname, lname, mobilenum });
    record.save().then(function(data){
        res.json(data);
    console.log(data);
    }).catch(function (err){
        console.log(err);
    })
})

app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server is running");
    }
})