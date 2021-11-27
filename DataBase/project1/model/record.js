const mongoose = require("mongoose");
const recordSchema = new mongoose.Schema({
    fname: {type:String, required:true}, lname:{ type: String, required:true}, email:{type: String, required: true, unique: true}});
    const record = mongoose.model("Record", recordSchema);
    module.exports = record;
