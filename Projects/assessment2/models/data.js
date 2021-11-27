const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    fname: { type: String, required: true }, lname: { type: String, required: true }, email: { type: String, required: true, unique: true }, password: { type: String, required: true }
})
const data = mongoose.model("AssessmentCollection", dataSchema);
module.exports = data;