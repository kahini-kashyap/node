const mongoose = require("mongoose");
const contactschema = new mongoose.Schema({
    fname: { type: String, required: true }, lname: { type: String, required: true }, mobilenum: { type: Number, required: true }
});
const contact = mongoose.model("Contact", contactschema);
module.exports = contact;