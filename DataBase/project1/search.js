const mongoose = require("mongoose");
const collection= require("./model/record.js");
mongoose.connect("mongodb+srv://kahini:abcd@cluster0.spez7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then( function(){
console.log("connected to database");
}).catch(function(err){
    console.log(err);
});
collection.find({
    fname : "rahul ", lname:"sharma"
}).then(function(data){
    console.log(data);
}).catch({function(err){
   console.log(err);
}})