const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name: {type: String, required: true}, age: {type: String, required: true}, email: {type: String, required: true, unique: true},password: {type: String, required: true}
})

const data = mongoose.model("users", dataSchema);
module.exports = data;